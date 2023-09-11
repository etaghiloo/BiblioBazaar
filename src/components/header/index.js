import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';

export default function Header() {
	return (
		<div className="header">
			{["md"].map((expand) => (
				<Navbar expand={expand} className="py-3">
					<div className="container">
						<Navbar.Brand className="d-flex justify-content-between align-items-center gap-3 ps-1" href="#">
							<i className="bi bi-book-half fs-5"></i>
							<h4 className="fw-bold mb-0">BiblioBazaar</h4>
						</Navbar.Brand>
						<Navbar.Toggle aria-controls={`offcanvasNavbar-expand-md`} className="border-0 shadow-none p-0" />
						<Navbar.Offcanvas
							id={`offcanvasNavbar-expand-md`}
							aria-labelledby={`offcanvasNavbarLabel-expand-md`}
							placement="end"
						>
							<Offcanvas.Header closeButton>
								<Offcanvas.Title id={`offcanvasNavbarLabel-expand-md`}>looking for more?</Offcanvas.Title>
							</Offcanvas.Header>
							<Offcanvas.Body>
								<Nav className="justify-content-end flex-grow-1 gap-4">
									<Nav.Link href="#" className="text-uppercase fw-bold">books</Nav.Link>
									<Nav.Link href="#" className="text-uppercase fw-bold">writers</Nav.Link>
									<Nav.Link href="#" className="text-uppercase fw-bold">publishers</Nav.Link>
									<Nav.Link href="#" className="text-uppercase fw-bold">contact</Nav.Link>
								</Nav>
							</Offcanvas.Body>
						</Navbar.Offcanvas>
					</div>
				</Navbar>
			))}
		</div>
	)
}