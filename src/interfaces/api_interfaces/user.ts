
import { IAPIActionDateDef, IAPIAddressDef } from "./core";

export interface IAPIUserInformationDef {
    user: IAPIUserDef;
    client_account: IAPIClientAccountDef;
    admin_account?: IAPIAdminAccountDef;
}

export interface IAPIUserDef {
    id: number;
    name: string;
    username: string;
    email?: string;
    taxId: string;
    phone: string;
    registerDate?: string;
}

export interface IAPIClientAccountDef {
    profile: IAPIClientAccountProfileDef;
    config: IAPIClientAccountConfigDef;
    status: IAPIClientAccountStatusDef;
    disabled?: IAPIAccountDisabledDef | boolean;
    /* country_list: IAPICountryDef[];
    default_country: IAPICountryDef; */
}

export interface IAPIAccountDisabledDef {
    reason: string;
    date: number;
    user: {
        id: number;
        name: string;
    };
}

export interface IAPIClientAccountProfileDef {
    id: number;
    name: string;
    picture_url: string;
    phone: string;
    average: number;
    address: IAPIAddressDef[];
    plan: any;
}

export interface IAPIClientAccountConfigDef {
    allowNotifications: boolean;
    push_notifications: boolean;
    email_notifications: boolean;
}

export interface IAPIClientAccountStatusDef {
    id: number;
    comments: string;
    create: IAPIActionDateDef;
    name: string;
    sys_name: string;
}

export interface IAPIAdminAccountStatusDef {
    id: number;
    comments: string;
    sys_name: string;
    name: string;
    create: IAPIActionDateDef;
}

export interface IAPIAdminAccountDef {
    id: number;
    role: IAPIAdminRoleDef;
    position: string;
    status: IAPIAdminAccountStatusDef;
    create: IAPIActionDateDef;
    delete: IAPIActionDateDef;
    /* country_list: IAPICountryDef[];
    default_country: IAPICountryDef; */
}

export interface IAPIAdminRoleDef {
    id: number;
    name: string;
    description: string;
}

export interface IAPIAdminAccountRoleDef {
    id: number;
    name: string;
    description: string;
    privileges: null;
}

export interface IAPIChannelVerificationToken {
    temporal_token: string;
}

export interface IAPIPasswordResetToken {
    token: string;
}

export interface IAPIPhoneVerificationCode {
    id: number;
    cell_number: string;
    is_verified: boolean;
    expire: {
        date: number;
    }
}
