import { Menubar } from 'primereact/menubar'
import { Button } from 'primereact/button'
import { InputText } from 'primereact/inputtext'
import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";                                //icons
import { useNavigate } from "react-router-dom";

function MenubarComponent() {
    const navigate = useNavigate();
    const items = [
        {
            label: 'Hi',
            command: () => { navigate('/') }
        },
        {
            label: 'Hello',
            command: () => { navigate('/Hello') }
        },
    ]

    return (
        <Menubar
            model={items}
            start={<InputText placeholder="Search" type="text" />}
            end={<Button label="Logout" icon="pi pi-power-off" onClick={e => console.log('test')} />}
        />
    )
}
export default MenubarComponent