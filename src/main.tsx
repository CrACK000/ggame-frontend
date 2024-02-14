import ReactDOM from 'react-dom/client'

import './assets/styles.css'
import App from './App'
import {Flowbite} from "flowbite-react";
import customTheme from "./theme";

ReactDOM.createRoot(document.getElementById('root')!).render(<Flowbite theme={{ theme: customTheme }}><App /></Flowbite>)
