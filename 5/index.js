import './index.css';
import { Donat } from './src/app'
import { buttonDonat } from './src/globalvalue'

const donat = new Donat

buttonDonat.addEventListener('click', event => {
    donat.addDonatToStoradge()
})

donat.renderAllDonat()



