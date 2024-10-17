// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.min.js';
// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
// import Container from 'react-bootstrap/Container';
// import Form from 'react-bootstrap/Form';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from 'react-responsive-carousel';
// import React, { useEffect, useState } from 'react'

// const App = () => {
//   let [api,setApi]=useState([]);
//   useEffect(()=>{
//     fetch(`https://api.themoviedb.org/3/trending/movie/day?&api_key=c202f0c11aa8b52272804f5b020a8667&language=en-US`)
//     .then(x=>x.json())
//     .then(data=>setApi(data.results))
//   },[])
//   console.log(api);
  
//   return (
//     <div>
//       <Navbar expand="lg" className="bg-body-tertiary">
//       <Container fluid>
//         <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
//         <Navbar.Toggle aria-controls="navbarScroll" />
//         <Navbar.Collapse id="navbarScroll">
//           <Nav
//             className="me-auto my-2 my-lg-0"
//             style={{ maxHeight: '100px' }}
//             navbarScroll
//           >
//             <Nav.Link href="#action1">Home</Nav.Link>
//             <Nav.Link href="#action2">Link</Nav.Link>
//             <NavDropdown title="Link" id="navbarScrollingDropdown">
//               <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
//               <NavDropdown.Item href="#action4">
//                 Another action
//               </NavDropdown.Item>
//               <NavDropdown.Divider />
//               <NavDropdown.Item href="#action5">
//                 Something else here
//               </NavDropdown.Item>
//             </NavDropdown>
//             <Nav.Link href="#" disabled>
//               Link
//             </Nav.Link>
//           </Nav>
//           <Form className="d-flex">
//             <Form.Control
//               type="search"
//               placeholder="Search"
//               className="me-2"
//               aria-label="Search"
//             />
//             <Button variant="outline-success">Search</Button>
//           </Form>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//     <div>
//       <Carousel>
//         {api.map((x,i)=>{
//           return(
//             <>
//             <div>
//                     <img src={`https://image.tmdb.org/t/p/original/${x.backdrop_path}`} />
//                     <p className="legend">{x.title}</p>
//                 </div>
//             </>
//           )
//         })}
//       </Carousel>
//     </div>
//     <div style={{display:"flex"}}>
//     {api.map((x,i)=>{
//       return(
//         <>
//         <Card style={{ width: '18rem' }}>
//       <Card.Img variant="top" src={`https://image.tmdb.org/t/p/original/${x.backdrop_path}`} />
//       <Card.Body>
//         <Card.Title>Card Title</Card.Title>
//         <Card.Text>
//           Some quick example text to build on the card title and make up the
//           bulk of the card's content.
//         </Card.Text>
//         <Button variant="primary">Go somewhere</Button>
//       </Card.Body>
//     </Card>
//         </>
//       )
//     })}
//     </div>

//     </div>

    
//   )
// }

// export default App


// import React, { useEffect, useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.min.js';
// import Button from 'react-bootstrap/Button';
// import Container from 'react-bootstrap/Container';
// import Form from 'react-bootstrap/Form';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
// import Card from 'react-bootstrap/Card';

// import "react-responsive-carousel/lib/styles/carousel.min.css"; 
// import { Carousel } from 'react-responsive-carousel';

// const App = () => {
//   let [api,setapi]=useState([])
//   let [search,setsearch]=useState('')
//   function movie(){
//     fetch(`https://api.themoviedb.org/3/search/movie?query=${search}&api_key=1fe4ba70475442225a237aefdf241318`)
//     .then(x=>x.json())
//     .then(x=>setapi(x.results))
//   }
//   useEffect(()=>{
//     fetch(`https://api.themoviedb.org/3/trending/movie/day?&api_key=c202f0c11aa8b52272804f5b020a8667&language=en-US`)
//     .then((x)=>x.json()).then(x=>setapi(x.results))
//     .catch(err=>console.error('error',err))
//   },[])
//   console.log(api);
  
//   return (
//     <div>
//       {/* Navbar */}
//       <Navbar expand="lg" className="bg-body-tertiary">
//       <Container fluid>
//         <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
//         <Navbar.Toggle aria-controls="navbarScroll" />
//         <Navbar.Collapse id="navbarScroll">
//           <Nav
//             className="me-auto my-2 my-lg-0"
//             style={{ maxHeight: '100px' }}
//             navbarScroll
//           >
//             <Nav.Link href="#action1">Home</Nav.Link>
//             <Nav.Link href="#action2">Link</Nav.Link>
//             <NavDropdown title="Link" id="navbarScrollingDropdown">
//               <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
//               <NavDropdown.Item href="#action4">
//                 Another action
//               </NavDropdown.Item>
//               <NavDropdown.Divider />
//               <NavDropdown.Item href="#action5">
//                 Something else here
//               </NavDropdown.Item>
//             </NavDropdown>
//             <Nav.Link href="#" disabled>
//               Link
//             </Nav.Link>
//           </Nav>
//           <Form className="d-flex">
//             <Form.Control
//               type="search"
//               placeholder="Search"
//               className="me-2"
//               aria-label="Search"
//               value={search}
//               onChange={(e)=>setsearch(e.target.value)}
//             />
//             <Button onClick={movie} variant="outline-success">Search</Button>
//           </Form>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//     <Carousel>
//                {api.map(x=>{
//                 return(
//                   <>
//                    <div>
//                     <img src={`https://image.tmdb.org/t/p/original/${x.backdrop_path}`} alt='error' />
//                     <p className="legend">{x.title}</p>
                    
//                 </div>
//                   </>
//                 )
//                })}
//     </Carousel>
//     <section style={{display:'flex',flexWrap:'wrap',justifyContent:'space-around',gap:"20px"}}>
//    {api.map(x=>{
//     return(<>
//      <Card style={{ width: '18rem' }}>
//       <Card.Img variant="top" src={`https://image.tmdb.org/t/p/original/${x.backdrop_path}`} />
//       <Card.Body>
//         <Card.Title>Card Title</Card.Title>
//         <Card.Text>
//           Some quick example text to build on the card title and make up the
//           bulk of the card's content.
//         </Card.Text>
//         <Button variant="primary">Go somewhere</Button>
//       </Card.Body>
//     </Card>
//     </>)
//    })}
//     </section>
//     </div>
    
//   )
// }

// export default App

import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import GetMovie from './pages/GetMovie'
import ParticularMovie from './pages/ParticularMovie'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<GetMovie/>}></Route>
          <Route path='/particular' element={<ParticularMovie/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App

