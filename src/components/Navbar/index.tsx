import { Logo, NavbarContainer, NavConteinerClose, NavInput } from "./styles";

export function Navbar() {
    return (
        <NavbarContainer>
            <Logo to="/">CoreNotes</Logo>
            <NavInput type="text" placeholder="Pesquisar notas" />
            <NavConteinerClose></NavConteinerClose>
        </NavbarContainer>
    )
}