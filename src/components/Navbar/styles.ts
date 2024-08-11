import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  padding: 10px 20px;
  position: fixed; 
  top: 0;
  left: 0;
  width: 100%; 
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); 
  z-index: 1000; 
`;

export const Logo = styled(Link)`
  font-size: 18px;
  font-weight: normal;
  color: #5B5955;
  text-decoration: none;
  &:hover {
    color: #5B5955;
  }
`;

export const NavInput = styled.input`
    padding: 8px 12px; 
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 14px; 
    width: 40%;
    box-sizing: border-box; 
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2); 

    &:focus {
        outline: none; 
    }
`;

export const NavLinks = styled.div`
  display: flex;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
  }
`;

export const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 18px;

  &:hover {
    color: #61dafb;
  }
`;

export const NavConteinerClose = styled.div`
    width: 40%;

    @media (max-width: 768px) {
        width: 10%;
    }
`;
