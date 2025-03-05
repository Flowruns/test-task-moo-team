import {Box, Modal, Typography} from "@mui/material";
import Button from "../UI/Button";

/**
 * Компонент модального окна для "Долгого запроса"
 * @param open - состояние модального окна
 * @param handleClose - обработчик закрытия модального окна
 * @param steps - шаги запроса
 * @returns {JSX.Element} - возвращаем JSX элемент, который содержит структуру модального окна
 */
const RequestingWindow = ({ open, handleClose, steps }) => {

    // Возвращаем JSX элемент, который содержит структуру модального окна
    return (
        <Modal open={open} onClose={handleClose}>
            <Box
                sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    justifyContent: 'center',
                    minWidth: 500,
                    minHeight: 200,
                    backgroundColor: 'white',
                    padding: 2,
                    boxShadow: 24,
                    borderRadius: 2,
                }}
            >
                <Typography variant="h5" component="h2" sx={{ fontWeight: 'bold', mb: 2 }}>
                    Requesting the quote
                </Typography>
                {steps.map((step, index) => (
                    <Typography key={index}>
                        Step {index + 1}: {step.message} {step.completed ? 'completed' : ''}
                    </Typography>
                ))}
                <Button onClick={handleClose} text={'Cancel'} sx={{ mt: 2 }} filled={true}/>
            </Box>
        </Modal>
    );
};

// Экспортируем компонент RequestingWindow
export default RequestingWindow;