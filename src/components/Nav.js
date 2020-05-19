import React from 'react'



const Nav = () => {
	return (
		<div className="navRoot">
			<div className="navPhoto">
				<img id="navPhoto" src='https://i.imgur.com/Ip1yyyN.jpg'></img>
			</div>
			<div className="navBody">
				<div id="navName">
				<div id="name">John Obertubbesing</div>
				<div id="descript">-Full Stack Web Developer</div>
				</div>
				<div id="navSelector"></div>
			</div>
		</div>
	)
}

export default Nav