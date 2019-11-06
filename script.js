const string = 'SMS messages are really short';

const editMessage = s => {
    let quantity = [],
        sms = [],
        k = 12,
        arrWords = s.split(' ');

    const check = arrWords.every( words => {
        return words.length < 12
    });

    if (check) {
        arrWords.forEach ((i)=> {
                if (sms.join(' ').length < k
                    && (k - (sms.join(' ').length)) > i.length
                    && i.length < k) {

                sms.push(i);

            } else if ( i.length < k
                    &&  sms.join(' ').length !== 0
                    || ((sms.join(' ').length) - k) > i.length) {

                quantity.push(sms.join(' '));
                sms = [];
                sms.push(i);
            }
        });
        quantity.push(sms.join(' '));
    } else {
        quantity = -1
    }
    return (quantity)
};

console.log(editMessage(string));