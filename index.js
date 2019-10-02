const request=require('request')

const url='https://api.darksky.net/forecast/08b8059da1e108b837eacc5780f2aa35/37.8267,-122.4233'

request({url:url,json:true},(error,response,body)=>{
console.log(response)
})

export default request
