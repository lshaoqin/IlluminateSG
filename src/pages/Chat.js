import { IconButton, TextField } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';

function Chat() {
  return (
    <div>
      <div>
        <TextField 
          multiline
        />
        <IconButton>
          <SendIcon color="primary"/>
        </IconButton>
      </div>
    </div>
  )
}

export default Chat;