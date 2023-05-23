
 

var baseURL='/JSCore3/SecuenciaCalculo';
var extraParams='';

var dic_sistema="&compania=1&usuario=gerente";

function urlConnection(opc){
    var dat ='/JSCore3/SecuenciaCalculo/json' + opc;
    return dat
}

function msgBox(title,msg){
    Ext.MessageBox.show({
        title: title,
        msg: msg,
        icon: Ext.MessageBox.INFO,
        buttons: Ext.Msg.OK
    });
}

function msgBoxErr(title,msg){
    Ext.MessageBox.show({
        title: title,
        msg: msg,
        icon: Ext.MessageBox.ERROR,
        buttons: Ext.Msg.OK
    });
}

function msgOut(msg){
    	if(console){
            console.log(msg);
        }
}

function formatCurrency(num) {
    num = num.toString().replace(/\$|\,/g,'');
    if(isNaN(num))
        num = "0";
    sign = (num == (num = Math.abs(num)));
    num = Math.floor(num*100+0.50000000001);
    cents = num%100;
    num = Math.floor(num/100).toString();
    if(cents<10)
        cents = "0" + cents;
    for (var i = 0; i < Math.floor((num.length-(1+i))/3); i++)
        num = num.substring(0,num.length-(4*i+3))+','+
        num.substring(num.length-(4*i+3));
    return (((sign)?'':'-') + '$' + num + '.' + cents);
}

function renderMoney(val) {
    if (val > 0) {
        return '<span style="color:green;;font-weight: bold">' +formatCurrency(Math.round(val*1000)/1000)  + '</span>';
    } else if (val < 0) {
        return '<span style="color:red;;font-weight: bold">' + formatCurrency(Math.round(val*1000)/1000) + '</span>';
    }
    return val;
}