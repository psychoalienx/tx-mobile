import i18n from "@hooks/useLocalize";

// const currentLang = 'es-ES';
const currentLang = i18n.currentLocale();

export class DateTime {

  constructor() { }

  public static formatDate(date: any) {
    let retVal = '';
    if (date && date > 0) {
      date = (new Date(date));
      //retVal = date.getDate() + ' ' + date.toLocaleString(currentLang, { month: 'long' }) + ' ' + date.getFullYear();
      retVal = date.getDate() + ' ' + DateTime.formatDateMonth(date, 10) + ' ' + date.getFullYear();
    }
    return retVal;
  }

  public static formatDateDay(date: any) {
    let retVal = '';
    if (date && date > 0) {
      date = (new Date(date));
      retVal = date.getDate();
    }
    return retVal;
  }

  public static formatDateMonth(date: any, length = 3) {
    let retVal = '';
    if (date && date > 0) {
      var months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
      var d = new Date(date);
      retVal = (months[d.getMonth()] || '').substr(0, length);
    }
    return retVal;
    /* let retVal = '';
    if (date && date > 0) {
      date = (new Date(date));
      retVal = date.toLocaleString('default', { month: 'short' });
    }
    return retVal; */

  }

  public static formatDateMonthLong(date: any) {
    let retVal = '';
    if (date && date > 0) {
      date = (new Date(date));
      retVal = date.toLocaleString(currentLang, { month: 'long' });
    }
    return retVal;
  }

  public static formatDateHour(date: any) {
    let retVal = '';
    if (date && date > 0) {
      date = (new Date(date)) as Date;
      let hours = date.getHours();
      let minutes = date.getMinutes();
      const ampm = hours >= 12 ? 'pm' : 'am';
      hours = hours % 12;
      hours = hours ? hours : 12; // the hour '0' should be '12'
      minutes = minutes < 10 ? '0' + minutes : minutes;
      retVal = hours + ':' + minutes + ' ' + ampm;
    }
    return retVal;
  }

  public static to24HourTime(time: string) {
    let retVal = '';
    const pm = time.split('pm').length > 1;
    const pieces = time.replace(' ', '').split(pm ? 'pm' : 'am')[0].split(':');
    let hours = pm ?
      pieces[0] === '12' ?
        pieces[0] :
        (parseInt(pieces[0]) + 12).toString() :
      pieces[0] === '12' ? '00' : ((parseInt(pieces[0]) < 10 ? '0' : '') + pieces[0]);
    let minutes = pieces.length > 1 ? ':' + pieces[1] : '';
    let seconds = pieces.length > 2 ? ':' + pieces[2] : '';
    retVal = hours + minutes + seconds;
    return retVal;
  }

  public static formatShortDate(date: any) {
    let retVal = '';
    if (date && date > 0) {
      retVal = (new Date(date)).toLocaleDateString(currentLang);
    }
    return retVal;
  }

  public static getRemainingTime(date: string) {

  }

  public static formatTimelineDate(date: any) {
    let currentDate = new Date();
    let results = this.timeElapsed(new Date(date), currentDate);
    return i18n.t(`text.${results.unit}TimelineDate`, { value: results.value });
  }

  public static padDate(itemDate: any) {
    let currentDate = new Date();
    let results = this.timeElapsed(itemDate, currentDate);
    if (results.unit === 'days') {
      return results.value == 1
        ? i18n.t('common.systemDates.yesterday')
        : `${itemDate.getDate()}/${itemDate.getMonth()}/${itemDate.getFullYear()}`;
    } else {
      return i18n.t('common.systemDates.today');
    }
  };

  public static timeElapsed(startDate: any, endDate: any) {
    let milli = endDate.getTime() - startDate.getTime();

    let seconds = Math.floor(milli / 1000);
    let minutes = Math.floor(seconds / 60);
    let hours = Math.round(minutes / 60);
    let days = Math.round(hours / 24);

    return (
      (days > 0 && { value: days, unit: 'days' }) ||
      (hours > 0 && { value: hours, unit: 'hours' }) ||
      (minutes > 0 && { value: minutes, unit: 'minutes' }) || {
        value: seconds,
        unit: 'seconds',
      }
    );
  };

}
