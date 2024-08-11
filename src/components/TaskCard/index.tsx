import { useState } from 'react';
import { 
    FooterButton, 
    TaskCardBody, 
    TaskCardCheck, 
    TaskCardContainer, 
    TaskCardFooter, 
    TaskCardHeader, 
    TaskCardInput, 
    TaskCardTextarea, 
    TaskCardTitle 
} from './styles';

interface TaskCardProps {
    id?: number;
    title?: string;
    body?: string; 
    bodyHeight?: string; 
    showFooter?: boolean; 
    favorite?: boolean;
    handleEdit?: (title: string, body: string) => void
}

export function TaskCard({ id, title = '', body = '', favorite = false, bodyHeight = '26rem', showFooter = false }: TaskCardProps) {
    const [isEditing, setIsEditing] = useState(false);
    const [currentTitle, setCurrentTitle] = useState(title);
    const [currentBody, setCurrentBody] = useState(body);
    const [isChecked, setIsChecked] = useState(favorite);

    const handleEdit = () => {
        setIsEditing(true);
    };

    const handleSave = () => {
        setIsEditing(false);
    };

    const handleCancel = () => {
        setIsEditing(false);
        setCurrentTitle(title);
        setCurrentBody(body);
    };

    const handleCheckboxChange = () => {
        setIsChecked(prev => !prev);
    };

    return (
        <TaskCardContainer>
            <TaskCardHeader>
                {isEditing || !id ? (
                    <TaskCardInput 
                        type="text" 
                        placeholder="Título" 
                        value={currentTitle}
                        onChange={(e) => setCurrentTitle(e.target.value)}
                    /> 
                ) : (
                    <TaskCardTitle>{title}</TaskCardTitle>
                )}
                <TaskCardCheck 
                    checked={isChecked} 
                    onChange={handleCheckboxChange} 
                />
            </TaskCardHeader>
            <TaskCardBody bodyHeight={bodyHeight}>
                {isEditing || !id ? (
                    <TaskCardTextarea 
                        placeholder="Digite algo..." 
                        value={currentBody}
                        onChange={(e) => setCurrentBody(e.target.value)}
                    />
                ) : (
                    <div>{body}</div>
                )}
            </TaskCardBody>
            {showFooter && (
                <TaskCardFooter>
                    <div>
                        {isEditing ? (
                            <>
                                <FooterButton onClick={handleSave}>Save</FooterButton>
                                <FooterButton onClick={handleCancel}>Cancel</FooterButton>
                            </>
                        ) : (
                            <FooterButton onClick={handleEdit}>Edit</FooterButton>
                        )}
                        <FooterButton>Color</FooterButton>
                    </div>
                    <span>X</span>
                </TaskCardFooter>
            )}
        </TaskCardContainer>
    );
}
