const FastSpeedtest = require("fast-speedtest-api");
const { Client } = require('@elastic/elasticsearch');


const client = new Client({
    cloud: {
        id: process.env.EC_ID,
    },
    auth: {
        username: process.env.ES_USERNAME,
        password: process.env.ES_PASSWORD
    }
})

let speedtest = new FastSpeedtest({
    token: process.env.FASTCOM_TOKEN, // required
    verbose: false, // default: false
    timeout: 10000, // default: 5000
    https: true, // default: true
    urlCount: 5, // default: 5
    bufferSize: 8, // default: 8
    unit: FastSpeedtest.UNITS.Mbps, // default: Bps
    //proxy: 'http://optional:auth@my-proxy:123' // default: undefined
});

let interval = 5 * 60 * 1000;
setInterval(function() {
    speedtest.getSpeed().then(s => {
        console.log(`Speed: ${s} Mbps`);
        async function run () {
          const result = await client.index({
            index: 'fastcom',
            body: {
              '@timestamp': new Date(),
              'speed': `${s}`
            }
          })

          console.log(result)
        }

        run().catch(console.log)
    }).catch(e => {
        console.error(e.message);
    });
}, interval);