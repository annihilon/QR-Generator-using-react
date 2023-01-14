import  QRCode from 'qrcode'
import { useState } from "react"

function App() {
	const [url, seturl] = useState('')
	const [qrcode, setqrcode] = useState('')
	const GenerateQRCode = () => {
		QRCode.toDataURL(url, {
			width: 300,
			height: 300,
			margin: 2
		}, (err, url) => {
			if (err) return console.error(err)

			console.log(url)
			setqrcode(url)
		})
	}

	return (
		<div className="app">
			<h1>Generate QR Code</h1>
			<h3>QR code gnerator for URL, vCards, texts and more</h3>
			<input type="text"
			placeholder="e.g. https://annihilon.edu"
			value={url}
			onChange={(evt) => seturl(evt.target.value)}/>
			<button onClick={GenerateQRCode}>GENERATE</button>
			{qrcode && <>
			
				<img src={qrcode} />
				<a href={qrcode} download="your_qrcode.png">Click here to Download</a>
			</>}
		</div>
	)
}

export default App
