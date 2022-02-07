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
						if (item.type === 'text') {
							return <p className="session_text" key={id}>{item.content}</p>
						}
						return <img className="session_img" key={id} src={'/imgs/' + item.content} alt={item.alt}/>
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
					<Session key={id} session={item} show={true} />
				)
			})}
    </div>
	)
}

export default MainContent