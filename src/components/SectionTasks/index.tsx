import { TaskCard } from '../TaskCard';
import { SectionContainer, SectionHeader, CardsContainer } from './styles';

interface Card {
  title: string;
  body?: string;
  favorite?: boolean
}

interface SectionTasksProps {
  title: string;
  cards: Card[]; 
}

export function SectionTasks({ title, cards }: SectionTasksProps) {
  return (
    <SectionContainer>
      <SectionHeader>{title}</SectionHeader>
      <CardsContainer>
        {cards.map((card, index) => (
          <TaskCard key={index} {...card} showFooter={true} />
        ))}
      </CardsContainer>
    </SectionContainer>
  );
}