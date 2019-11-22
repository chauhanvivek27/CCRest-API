const data = require('./data');
const testdata = require('./test-data');

describe('Credit Card application: ', () => {

    it('add credit card detail Invalid', ()=>{
        const ccdata = {
            "Name": "Vivek",
            "CCNumber": "WEWEWEWEWE",
            "Limit": "121212"
        }
        expect(data.addCC(ccdata)).toHaveProperty("result", "failed");
    });

    it('Enter valid credit card detail', ()=>{
        const ccdata = {
            "Name": "Vivek",
            "CCNumber": "1212121212",
            "Limit": "121212"
        }
        expect(data.addCC(ccdata)).toHaveProperty("result", "success");
    });

});