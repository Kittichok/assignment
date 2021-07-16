
import Axios from 'axios';

const line = (message: string) => {
  const token = process.env.LINETOKEN

  const lineNotiUrl = `https://notify-api.line.me/api/notify?message=${message}` 

  Axios.post(lineNotiUrl,
    null,
    { headers: { 'Authorization': 'Bearer ' + token} })
    .then(response => {})
    .catch(err => { console.error(err) } )
}


export { line }