import React, { RefObject } from "react";
import { Modal, StyleSheet, Text, View, TouchableOpacity, TextInput, ActivityIndicator, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { ScrollView } from "react-native-gesture-handler";
import Fab from "./FAB";
import * as ErrorRecovery from 'expo-error-recovery';
import { ApiService } from "@services/api/core/api.service";
import { _sendReport } from "./http.service";
import { firstValueFrom } from "rxjs";
import { config } from './config';

export interface RsLogAPIEntryDataDef {
    endpoint?: string; // endpoint que se desea registrar
    method?: string; // método que se usó en la consulta que se desea registrar
    payload?: string;  // payload de la consulta que se desea registrar
    response?: string; // respuesta de la consulta que se desea registrar
    requestHeaders?: string; // header de la consulta que se desea registrar
    responseHeaders?: string; // response headers  de la consulta que se desea registrar
    responseStatus?: string;
};

export interface RSLogEntryDef {
    subject: string;
    data: any;
    date: string;
};

var listeners = {
    log: (data: any, subject?: string) => { }
};

export type RsLoggerComponentProps = { recovery: any };
export class RsLoggerComponent extends React.Component<RsLoggerComponentProps> {

    state: {
        visible: boolean,
        recording: boolean,
        showOptions: boolean,
        showLog: boolean,
        dialog: string,
        stats: string,
        output: string,
        message: string,
        sending: boolean,
        includeContext: boolean,
        entriesCount: number
    };

    initialState = {
        visible: false,
        recording: false,
        showOptions: false,
        showLog: false,
        dialog: '',
        stats: '',
        output: '',
        message: '',
        sending: false,
        includeContext: false,
        entriesCount: 0
    };

    clearOnExit = false;
    logEntries: any[] = [];
    logEntriesComponentRefs: any[] = [];
    contextData: any = null;
    constructor(props: any) {
        super(props);
        let recoveryData = {};
        if (this.props?.recovery) {
            if (this.props?.recovery?.rslogger === "RECORD_STARTUP") {
                recoveryData = { recording: true };
            } else {
                recoveryData = {
                    visible: true,
                    showOptions: true,
                    stats: 'App closed due exception. Would you like to report it?',
                    output: JSON.stringify(this.props.recovery)
                };
            }
        }

        this.state = {
            ...this.initialState,
            ...recoveryData
        } as any;

    }

    async componentDidMount() {
        const self = this;
        listeners = {
            log: (data: any, subject?: string) => self.log(data, subject),
        };
    }

    componentWillUnmount() {
    }

    reloadAndRecord() {
        ErrorRecovery.setRecoveryProps({ rslogger: "RECORD_STARTUP" });
        throw "RELOAD!";
    }

    showModal() {
        this.setState({ visible: true });
    }

    closeModal() {
        this.setState({ visible: false });
        if (this.clearOnExit) {
            this.logEntries = [];
            this.logEntriesComponentRefs = [];
            this.contextData = null;
            this.setState({ ...this.initialState });
            this.clearOnExit = false;
        }
    }

    startLog() {
        this.setState({ recording: true });
        this.closeModal();
    }

    stopLog() {
        const output = this.getLogOutput();
        this.setState({ showOptions: true, recording: false, stats: this.getLogStats(output), output });
        this.clearOnExit = true;
    }

    async log(data: any, subject?: string) {
        if (this.state.recording) {
            this.logEntries.push({ data, subject, date: new Date().toLocaleString() });
            this.setState({ entriesCount: this.logEntries.length });
        }
    }

    getLogStats(text) {
        const size: number = text.length;
        return `${this.state.entriesCount} entries, ${this.humanFileSize(size)}`
    }

    async contextCheckboxPressed() {
        const newVal = !this.state.includeContext;
        this.setState({ includeContext: newVal });
        if (newVal) {
            let subscription = ApiService.user.getInformation().subscribe({
                next: (userInfo) => {
                    this.contextData = userInfo;
                }
            });
            subscription.unsubscribe();
        } else {
            this.contextData = null;
        }
    }

    setRef = (ref) => {
        if (ref) {
            this.logEntriesComponentRefs.push(ref);
        }
    };

    sendReport() {
        this.logEntriesComponentRefs.forEach((ref) => {
            ref.send();
        });
    }

    getLogOutput() {
        return this.logEntries.map(entry => this.formatEntry(entry)).join('\n');
    }

    formatEntry(entry: { data: any, date: string, subject?: string }) {
        return ((entry.subject || false) ? `[${entry.subject}]` : '') + `[${entry.date}]\n${typeof entry.data === 'object' ? JSON.stringify(entry.data) : entry.data}`;
    }

    /**
     * Format bytes as human-readable text.
     * 
     * @param bytes Number of bytes.
     * @param si True to use metric (SI) units, aka powers of 1000. False to use 
     *           binary (IEC), aka powers of 1024.
     * @param dp Number of decimal places to display.
     * 
     * @return Formatted string.
     */
    humanFileSize(bytes, si = false, dp = 1) {
        const thresh = si ? 1000 : 1024;

        if (Math.abs(bytes) < thresh) {
            return bytes + ' B';
        }

        const units = si
            ? ['kB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']
            : ['KiB', 'MiB', 'GiB', 'TiB', 'PiB', 'EiB', 'ZiB', 'YiB'];
        let u = -1;
        const r = 10 ** dp;

        do {
            bytes /= thresh;
            ++u;
        } while (Math.round(Math.abs(bytes) * r) / r >= thresh && u < units.length - 1);


        return bytes.toFixed(dp) + ' ' + units[u];
    }

    contextCheckbox() {
        return (
            <View style={styles.slotStart}>
                <TouchableOpacity
                    style={{ ...styles.checkbox, ...(this.state.includeContext ? styles.checkboxActive : {}) }}
                    onPress={() => this.contextCheckboxPressed()}>
                    <Ionicons name={'checkmark'} size={styles.checkbox.fontSize} color={styles.checkbox.color}></Ionicons>
                </TouchableOpacity>
            </View>
        );
    };

    render() {
        return (
            <>
                <Fab visible={!this.state.visible} onPress={() => this.showModal()} count={this.state.entriesCount} recording={this.state.recording} />
                {<Modal
                    animationType="slide"
                    transparent={true}
                    style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)' }}
                    visible={this.state.visible}
                    onRequestClose={() => this.closeModal()}>
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>

                            <TouchableOpacity
                                style={[styles.buttonClose]}
                                onPress={() => this.closeModal()}>
                                <Ionicons name={'close'} size={styles.buttonClose.fontSize}></Ionicons>
                            </TouchableOpacity>

                            <Text style={styles.modalTitle}>RsLogger</Text>
                            {this.state.showOptions && <Text style={{ width: '100%' }}>{this.state.stats}</Text>}

                            <View style={[styles.row, styles.rowCentered]}>
                                {/* <TouchableOpacity
                                    style={[styles.button]}
                                    onPress={() => this.closeModal()}>
                                    <Text style={styles.title}>Close</Text>
                                </TouchableOpacity> */}
                                {this.state.showOptions ?
                                    <>
                                        <View>
                                            <Text style={styles.dialogText}>Report data logged</Text>
                                            <View style={{ maxHeight: 300, width: '100%' }}>
                                                <FlatList
                                                    data={this.logEntries}
                                                    renderItem={({ item }) => <RsLogEntryComponent {...item} ref={this.setRef} />}
                                                    keyExtractor={(item, index) => index.toString()}
                                                />
                                            </View>
                                            <TextInput
                                                style={styles.input}
                                                multiline={true}
                                                numberOfLines={2}
                                                placeholder={'Describe here...'}
                                                onChangeText={(value) => this.setState({ message: value })}
                                            />
                                            <View style={styles.row}>
                                                {this.contextCheckbox()}
                                                <Text style={styles.dialogText}>Include context data?</Text>
                                            </View>
                                            <View style={styles.row}>
                                                <TouchableOpacity
                                                    style={[styles.button, { flexGrow: 0 }]}
                                                    onPress={() => this.setState({ showLog: !this.state.showLog })}>
                                                    <Text style={styles.buttonText}>{this.state.showLog ? 'Hide' : 'Show'}</Text>
                                                </TouchableOpacity>
                                                <TouchableOpacity
                                                    style={[styles.button, , { flexGrow: 1 }]}
                                                    onPress={() => this.sendReport()}>
                                                    {
                                                        this.state.sending ?
                                                            <ActivityIndicator color={styles.spinner.color}></ActivityIndicator> :
                                                            <Text style={styles.buttonText}>Send report</Text>
                                                    }
                                                </TouchableOpacity>
                                            </View>
                                        </View>
                                        {/* <TouchableOpacity
                                            style={[styles.button]}
                                            onPress={() => this.setState({ showLog: !this.state.showLog })}>
                                            <Text style={styles.buttonText}>{this.state.showLog ? 'Hide' : 'Show'}</Text>
                                        </TouchableOpacity> */}
                                    </>
                                    :
                                    <>
                                        {!this.state.recording && <TouchableOpacity
                                            style={[styles.button]}
                                            onPress={() => this.reloadAndRecord()}>
                                            <Text style={styles.buttonText}>{'Reload & record'}</Text>
                                        </TouchableOpacity>}
                                        <TouchableOpacity
                                            style={[styles.button]}
                                            onPress={() => this.state.recording ? this.stopLog() : this.startLog()}>
                                            <Text style={styles.buttonText}>{this.state.recording ? 'Stop Log' : 'Start Log'}</Text>
                                        </TouchableOpacity>
                                    </>
                                }
                            </View>
                            {(this.state.dialog || false) &&
                                <View>
                                    <Text style={styles.dialogText}>{this.state.dialog}</Text>
                                </View>
                            }
                            {
                                this.state.showLog &&
                                <View style={styles.logViewContainer}>
                                    <Text style={styles.logViewTitle}>Log</Text>
                                    <ScrollView style={styles.logViewScroll}>
                                        <Text style={styles.logViewText} selectable={true}>{this.state.output || ''}</Text>
                                    </ScrollView>
                                </View>
                            }
                        </View>
                    </View>
                </Modal>}
            </>
        );
    }
}

export class RsLogger {
    static log(data, subject?) {
        listeners.log(data, subject);
    }
}

export class RsLogEntryComponent extends React.Component<RSLogEntryDef> {

    state = {
        checked: false,
        sending: false,
        response: null,
        error: null
    };

    constructor(props: any) {
        super(props);
    }

    send() {
        if (this.state.checked) {
            this.setState({ sending: true });
            firstValueFrom(
                _sendReport(config.sheetId, config.sheetName, this.props.data))
                .then((result: any) => {
                    const response = result.insertedRowIndex;
                    let error;
                    if (!response) {
                        try {
                            error = JSON.stringify(result);
                        } catch (error) {
                            console.log(error);
                            error = 'Unknown error';
                        }
                    }
                    console.log({ response, error, checked: false });
                    this.setState({ response, error, checked: false });
                })
                .catch((error) => {
                    try {
                        error = JSON.stringify(error);
                    } catch (error) {
                        console.log(error);
                        error = 'Unknown error';
                    }
                    this.setState({ error, checked: false });
                })
                .finally(() => {
                    this.setState({ sending: false });
                });
        }
    }

    render() {
        return (
            <>
                <View style={styles.row}>
                    <View style={styles.slotStart}>
                        {this.state.sending ?
                            <ActivityIndicator color={styles.checkboxActive.backgroundColor} size='small' />
                            :
                            this.state.response ?
                                <Text numberOfLines={1} style={{ color: COLOR_SUCCESS }}>{`(${this.state.response})`}</Text>
                                :
                                <TouchableOpacity
                                    style={{ ...styles.checkbox, ...(this.state.checked ? styles.checkboxActive : {}) }}
                                    onPress={() => this.setState({ checked: !this.state.checked })}>
                                    <Ionicons name={'checkmark'} size={styles.checkbox.fontSize} color={styles.checkbox.color}></Ionicons>
                                </TouchableOpacity>
                        }
                    </View>
                    <View style={{ flexGrow: 1, flexShrink: 1 }}>
                        <Text
                        // numberOfLines={1}
                        // ellipsizeMode='middle'
                        >{[this.props?.subject, ...[this.props?.data?.endpoint || []]].join(' - ')}</Text>
                    </View>
                </View>
                {!!this.state.error && <View>
                    <Text style={{ color: COLOR_DANGER, fontSize: 10 }}>{`(${this.state.error})`}</Text>
                </View>}
            </>
        );
    }

}

const COLOR_PRIMARY = '#0c79dc';
const COLOR_PRIMARY_CONTRAST = '#ffffff';
const COLOR_MEDIUM = '#92949c';
const COLOR_DARK = '#222428';
const COLOR_DARK_CONTRAST = '#ffffff';
const COLOR_SUCCESS = '#2dd36f';
const COLOR_DANGER = '#eb445a';

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
    modalView: {
        minWidth: 200,
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 20,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    row: {
        flexDirection: "row",
        flexWrap: 'wrap',
        marginVertical: 4
    },
    rowCentered: {
        justifyContent: 'center',
    },
    button: {
        minWidth: 80,
        borderRadius: 20,
        padding: 10,
        elevation: 2,
        margin: 10,
        backgroundColor: COLOR_PRIMARY,
        alignItems: 'center',
    },
    buttonText: {
        color: COLOR_PRIMARY_CONTRAST
    },
    buttonClose: {
        // backgroundColor: '#CCC',
        borderRadius: 30,
        fontSize: 20,
        width: 30,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        top: 0,
        right: 0,
        margin: 10
    },
    title: {
        fontWeight: 'bold',
        textAlign: 'center',
        color: COLOR_DARK
    },
    dialogText: {
        fontSize: 16,
    },
    modalTitle: {
        marginBottom: 15,
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        color: COLOR_DARK
    },
    logViewContainer: {
        height: 300,
        width: '100%'
    },
    logViewTitle: {
        fontWeight: "bold",
        marginBottom: 10,
        color: COLOR_DARK
    },
    logViewScroll: {
        borderStyle: 'solid',
        borderWidth: 1,
        borderRadius: 10,
        minWidth: '100%',
        height: '100%'
    },
    logViewText: {
        margin: 5,
        color: COLOR_DARK
    },
    input: {
        width: '100%',
        minWidth: '100%',
        borderStyle: 'solid',
        borderWidth: 1,
        borderRadius: 10,
        padding: 5,
        marginVertical: 5
    },
    checkbox: {
        width: 24,
        height: 24,
        borderRadius: 5,
        borderStyle: 'solid',
        borderWidth: 1,
        fontSize: 20,
        // marginRight: 10,
        borderColor: COLOR_MEDIUM,
        backgroundColor: COLOR_PRIMARY_CONTRAST,
        color: COLOR_PRIMARY_CONTRAST
    },
    checkboxActive: {
        backgroundColor: COLOR_PRIMARY,
        color: COLOR_PRIMARY_CONTRAST,
    },
    spinner: {
        color: COLOR_PRIMARY_CONTRAST,
    },
    slotStart: {
        marginRight: 10,
        flexGrow: 0
    }
});
