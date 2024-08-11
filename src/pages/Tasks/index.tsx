import { Navbar } from "../../components/Navbar";
import { SectionTasks } from "../../components/SectionTasks";
import { TaskCard } from "../../components/TaskCard";
import { TasksCardsContainer, TasksContainer, TasksSectionAddCards } from "./styles";

export function Tasks() {

    const cards = [
        {
            title: 'teste',
            body: 'teste',
            id: 1,
            favorite: false
        },
        {
            title: 'teste',
            body: 'teste',
            id: 2,
            favorite: false
        },
        {
            title: 'teste',
            body: 'teste',
            id: 3,
            favorite: false
        }
    ]

    const cardsFavorite = [
        {
            title: 'teste',
            body: 'teste',
            id: 1,
            favorite: true
        },
        {
            title: 'teste',
            body: 'teste',
            id: 2,
            favorite: true
        },
        {
            title: 'teste',
            body: 'teste',
            id: 3,
            favorite: true
        }
    ]
    

    return (
        <TasksContainer>
            <Navbar></Navbar>
            <TasksCardsContainer>
                <TasksSectionAddCards>
                    <TaskCard bodyHeight='6rem' ></TaskCard>
                </TasksSectionAddCards>
                <SectionTasks title='Favoritas' cards={cardsFavorite} ></SectionTasks>
                <SectionTasks title='Outras' cards={cards} ></SectionTasks>
            </TasksCardsContainer>
        </TasksContainer>
    )
}