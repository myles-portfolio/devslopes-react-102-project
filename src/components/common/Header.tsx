import "@/css/Header.css";

export const Header = () => {
	return (
		<nav id="topNav" className="navbar nav">
			<div className="container">
				<button
					className="navbar-toggler"
					aria-expanded="false"
					aria-controls="navbarDropdown"
				>
					<span>&#9776;</span>
				</button>
				<a className="navbar-brand" href="index.html">
					Code Commerce
				</a>
				<ul className="navbar-nav">
					<li className="nav-link">
						<a href="#">Home</a>
					</li>
					<li className="nav-link">
						<a href="#">Shop</a>
					</li>
					<li className="nav-link">
						<a href="#">Cart</a>
					</li>
					<li className="nav-link">
						<a href="#">Support</a>
					</li>
					<li className="nav-link">
						<a href="#">Account</a>
					</li>
				</ul>
			</div>
		</nav>
	);
};
