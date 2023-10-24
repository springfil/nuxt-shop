export default defineEventHandler(async(event) => {

    // const { name } = getQuery(event)
    // const { age } = await readBody(event)
    // //api with private key
    // const { data }: any = await $fetch('https://api.currencyapi.com/v3/latest?apikey=cur_live_THHFbhd9MbRqIK50vz9NOtb5MH9SbXEsmyBI6uGX')

    // return{
    //     message: `${name} look at my trollface`,
    //     msg2: `You are ${age} years old`,
    //     currencyapi: data
    // }

   
    const { currencyKey } = useRuntimeConfig()

     const { data }: any = await $fetch(`https://api.currencyapi.com/v3/latest?apikey=${currencyKey}`)

     return data
})