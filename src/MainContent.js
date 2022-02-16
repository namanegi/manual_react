import { useState } from "react"

const Session = ({ session, show }) => {
	const [showSession, setShow] = useState(show)
	return (
		<div className="holder">
			<div
				className={showSession ? "session_name session_unact noselect" : "session_name noselect"}
				onClick={() => setShow(!showSession)}
			>
				{session.sessionName}
			</div>
			<div
				className="session_con"
				style={{display: showSession ? '' : 'none'}}
			>
				{
					session.sessionContents.map((item, id) => {
						switch (item.type){
							case 'text':
								return <div className="session_text" key={id}>{item.content.map((line, i) => <p key={i}>{line}</p>)}</div>
							case 'img':
								return <img className="session_img" key={id} src={'/imgs/' + item.content} alt={item.alt || 'img'}/>
							case 'code':
								return <div className="session_code" key={id}>{item.content.map((line, i) => <h5 className="code_line" key={i}>{line}</h5>)}</div>
							default:
								return <span></span>
						}
					})
				}
			</div>
		</div>
	)
}

const MainContent = ({ content }) => {
	return (
		<div id='main_con'>
			{content.map((item, id) => {
				return (
					<Session key={id} session={item} show={(id === 0)} />
				)
			})}
    </div>
	)
}

export default MainContent