//* ********************************************************************************** */
/*  Customer Calendar Plugin */
/*  Autor: Wagner, Ariel Alejandro */
/*  Date: 09-02-2019 */
/* ********************************************************************************** */
class Calendar {

    /**
     * Return the current date.
     * @returns {undefined} Return the current date.
     */
    static now() {
        var date = new Date();
        var day = date.getDate();
        var month = date.getMonth() + 1;
        var year = date.getFullYear();
        if (month < 10) { month = "0" + month; }
        if (day < 10) { day = "0" + day; }
        var today = year + "-" + month + "-" + day;       
        return today;
    }
    
    /**
     * Adjust the calendar for language zone. 
     * Examples: 
     * es - Used for Spain or Latin of America format. 
     * en - Used for English or USA format. Default.
     * @param {type} element Name of control. 
     * @param {type} language Language for the regional zone.
     * @returns {undefined} Void.
     */
    static setCalendarControl(element, language) {       
        // Spain Zone.
        if(language === 'es') {
            $(function() {
                $(element).datepicker($.extend({
                    closeText: 'Cerrar',
                    prevText: '>',
                    nextText: '<',
                    currentText: 'Hoy',
                    monthNames: [
                        'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 
                        'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 
                        'Noviembre', 'Diciembre'
                    ],
                    monthNamesShort: [
                        'Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 
                        'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'
                    ],
                    dayNames: [
                        'Domingo', 'Lunes', 'Martes', 'Miercoles', 
                        'Jueves', 'Viernos', 'Sabado'
                    ],
                    dayNamesShort: ['Dom', 'Lum', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab'],
                    dayNamesMin: ['Do', 'Lu', 'Ma', 'Mi', 'Ju', 'Vi', 'Sa'],
                    weekHeader: 'Semana',
                    dateFormat: 'dd-mm-yy',
                    firstDay: 7,
                    isRTL: false,
                    showMonthAfterYear: false,
                    yearSuffix: ''
                 },
                 $.datepicker.regional['es']
               ));
            });           
            // Adapter Date for Spain zone. 
            var rev = this.now().split('-');
            var fecha = rev[2] + "-" + rev[1] + "-" + rev[0];
            $(element).val(fecha);            
        } 
        // English Zone.
        if(language === 'en') {                  
            $(function() {
                $(element).datepicker($.extend({
                    closeText: 'Close',
                    prevText: '>',
                    nextText: '<',
                    currentText: 'Now',
                    monthNames: [
                        'January', 'February', 'March', 'April', 'May', 
                        'June', 'July', 'August', 'September', 'October', 
                        'November', 'December'
                    ],
                    monthNamesShort: [
                        'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 
                        'Jul', 'Agu', 'Sep', 'Oct', 'Nov', 'Dec'
                    ],
                    dayNames: [
                        'Sunday', 'Monday', 'Tuesday', 'Wednesday', 
                        'Thursday', 'Friday', 'Saturday'
                    ],
                    dayNamesShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
                    dayNamesMin: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
                    weekHeader: 'Week',
                    dateFormat: 'mm-dd-yy',
                    firstDay: 7,
                    isRTL: false,
                    showMonthAfterYear: false,
                    yearSuffix: ''
                 },
                 $.datepicker.regional['en']
               ));
            }); 
            // Adapter Date for English zone. 
            var rev = this.now().split('-');
            var currentDay = rev[1] + "-" + rev[2] + "-" + rev[0]; 
            $(element).val(currentDay);
        }
        // French Zone.
        if(language === 'fr') {                  
            $(function() {
                $(element).datepicker($.extend({
                    closeText: 'Fermer',
                    prevText: '>',
                    nextText: '<',
                    currentText: 'Soir',
                    monthNames: [
                        'Janvier', 'Février', 'Mars', 'Avril', 'Mai', 
                        'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 
                        'Novembre', 'Décembre'
                    ],
                    monthNamesShort: [
                        'Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Jui', 
                        'Jul', 'Aoû', 'Sep', 'Oct', 'Nov', 'Dec'
                    ],
                    dayNames: [
                        'Dimanche', 'Lundi', 'Mardi', 'Mercredi', 
                        'Juedi', 'Vendredi', 'Samedi'
                    ],
                    dayNamesShort: ['Dim', 'Lun', 'Mar', 'Mer', 'Jue', 'Ven', 'Sam'],
                    dayNamesMin: ['Di', 'Lu', 'Ma', 'Me', 'Ju', 'Ve', 'Sa'],
                    weekHeader: 'Semaine',
                    dateFormat: 'dd-nn-yy',
                    firstDay: 7,
                    isRTL: false,
                    showMonthAfterYear: false,
                    yearSuffix: ''
                 },
                 $.datepicker.regional['fr']
               ));
            }); 
            // Adapter Date for French zone. 
            var rev = this.now().split('-');
            var currentDay = rev[1] + "-" + rev[2] + "-" + rev[0]; 
            $(element).val(currentDay);
        }    
        // Germany Zone.
        if(language === 'de') {                  
            $(function() {
                $(element).datepicker($.extend({
                    closeText: 'mach',
                    prevText: '>',
                    nextText: '<',
                    currentText: 'jetzt',
                    monthNames: [
                        'Januar', 'Februar', 'März', 'April', 'Mai', 
                        'Juni', 'Juli', 'August', 'September', 'Oktober', 
                        'November', 'Dezember'
                    ],
                    monthNamesShort: [
                        'Jan', 'Feb', 'Mär', 'Apr', 'Mai', 'Jun', 
                        'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dez'
                    ],
                    dayNames: [
                        'Sonntag', 'Montag', 'Dienstag', 'Mittwoch', 
                        'Donnerstag', 'Freitag', 'Samstag'
                    ],
                    dayNamesShort: ['Son', 'Mon', 'Die', 'Mit', 'Don', 'Fre', 'Sam'],
                    dayNamesMin: ['So', 'Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa'],
                    weekHeader: 'Wochentage',
                    dateFormat: 'dd-mm-yy',
                    firstDay: 7,
                    isRTL: false,
                    showMonthAfterYear: false,
                    yearSuffix: ''
                 },
                 $.datepicker.regional['de']
               ));
            }); 
            // Adapter Date for Germany zone. 
            var rev = this.now().split('-');
            var currentDay = rev[1] + "-" + rev[2] + "-" + rev[0]; 
            $(element).val(currentDay);
        } 
        // Italy Zone.
        if(language === 'it') {                  
            $(function() {
                $(element).datepicker($.extend({
                    closeText: 'Chiudi',
                    prevText: '>',
                    nextText: '<',
                    currentText: 'Oggi',
                    monthNames: [                      
                        'Gennaio', 'Febbraio', 'Marzo', 'Aprile', 'Maggio',
                        'Giugno', 'Luglio', 'Agosto', 'Settembre', 'Ottobre',
                        'Novembre','Dicembre'                        
                    ],
                    monthNamesShort: [
                        'Gen', 'Feb', 'Mar', 'Apr', 'Mag', 'Giu',
                        'Lug', 'Ago', 'Set', 'Ott', 'Nov', 'Dic'                        
                    ],
                    dayNames: [
                        'Domenica', 'Lunedì', 'Martedì', 'Mercoledì', 
                        'Giovedì', 'Venerdì', 'Sabato'                        
                    ],
                    dayNamesShort: ['Dom', 'Lun', 'Mar', 'Mer', 'Gio', 'Ven', 'Sab'],
                    dayNamesMin: ['Do', 'Lu', 'Ma', 'Me', 'Gi', 'Ve', 'Sa'],
                    weekHeader: 'Settimana',
                    dateFormat: 'dd-nn-yy',
                    firstDay: 7,
                    isRTL: false,
                    showMonthAfterYear: false,
                    yearSuffix: ''
                 },
                 $.datepicker.regional['it']
               ));
            }); 
            // Adapter Date for Italian zone. 
            var rev = this.now().split('-');
            var currentDay = rev[1] + "-" + rev[2] + "-" + rev[0]; 
            $(element).val(currentDay);
        } 
        // Portugal-Brazil Zone.
        if(language === 'pt-BR') {                  
            $(function() {
                $(element).datepicker($.extend({
                    closeText: 'Fechar',
                    prevText: '>',
                    nextText: '<',
                    currentText: 'Hoje',
                    monthNames: [                      
                        'Janeiro', 'Fevereiro', 'Mar&ccedil;o', 'Abril', 'Maio',
                        'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 
                        'Dezembro'                       
                    ],
                    monthNamesShort: [
                        'Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun',
                        'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'
                    ],
                    dayNames: [
                        'Domingo', 'Segunda-feira', 'Ter&ccedil;a-feira', 'Quarta-feira', 
                        'Quinta-feira', 'Sexta-feira', 'Sabado'                     
                    ],
                    dayNamesShort: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'],
                    dayNamesMin: ['Do', 'Se', 'Te', 'Qa', 'Qi', 'Se', 'Sa'],
                    weekHeader: 'Semana',
                    dateFormat: 'dd-nn-yy',
                    firstDay: 7,
                    isRTL: false,
                    showMonthAfterYear: false,
                    yearSuffix: ''
                 },
                 $.datepicker.regional['pt-BR']
               ));
            }); 
            // Adapter Date for Italian zone. 
            var rev = this.now().split('-');
            var currentDay = rev[1] + "-" + rev[2] + "-" + rev[0]; 
            $(element).val(currentDay);
        }        
    }
}
