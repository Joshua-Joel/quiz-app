import * as React from 'react';
import Button from '@mui/joy/Button';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import Modal from '@mui/joy/Modal';
import ModalDialog from '@mui/joy/ModalDialog';
import Stack from '@mui/joy/Stack';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';

export default function QuizModalDialog() {
  const [open, setOpen] = React.useState(false);
  return (
    <React.Fragment>
      <Button
        variant="outlined"
        color="neutral"
        endDecorator={<KeyboardArrowRight />}
        onClick={() => setOpen(true)}
        style={{backgroundColor:"blue" ,color:"white"}}
      >
        Attend quizz
      </Button>
      <Modal open={open} onClose={() => setOpen(false)}>
        <ModalDialog>
          <form
            onSubmit={(event) => {
              event.preventDefault();
              setOpen(false);
            }}
          >
            <Stack spacing={2}>
              <FormControl>
                <FormLabel>Quizz Id</FormLabel>
                <Input autoFocus required />
              </FormControl>
              <Button type="submit">Start quizz</Button>
            </Stack>
          </form>
        </ModalDialog>
      </Modal>
    </React.Fragment>
  );
}
