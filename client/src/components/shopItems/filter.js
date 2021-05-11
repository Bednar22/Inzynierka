import React, {useState} from 'react'
import Container from '@material-ui/core/Container';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import Typography from '@material-ui/core/Typography'

const Filter = () => {

    const [openCzesci, setOpenCzesci] = useState(false);
    const [openAkcesoria, setOpenAkcesoria] = useState(false)
    const [openOdziez, setOpenOdziez] = useState(false)
    
    const handleClickCzesci = () => {
      setOpenCzesci(prevOpenCzesci=>!prevOpenCzesci);
    };

    const handleClickAkcesoria = () => {
        setOpenAkcesoria(prevOpenAkcesoria=>!prevOpenAkcesoria);
      };

      const handleClickOdziez = () => {
        setOpenOdziez(prevOpenOdziez=>!prevOpenOdziez);
      };

    return (
        <>
           <List style={{maxWidth:200}}>
            <ListItem button >
            <ListItemText primary="Części" />
        
        <ListItemSecondaryAction>
        {openCzesci ? <ExpandLess edge='end' onClick={handleClickCzesci}/> : <ExpandMore edge='end' onClick={handleClickCzesci}/>}
        </ListItemSecondaryAction>
      </ListItem>
      <Collapse in={openCzesci} timeout='0' unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button >
            <ListItemText primary="Klocki hamulcowe" />
          </ListItem>
          <ListItem button >
            <ListItemText primary="Łańcuchy" />
          </ListItem>
          <ListItem button >
            <ListItemText primary="Śrubki" />
          </ListItem>
        </List>
      </Collapse>

      {/* druga czesc */}
      <ListItem button >
            <ListItemText primary="Akcesoria" />
        
        <ListItemSecondaryAction>
        {openAkcesoria ? <ExpandLess edge='end' onClick={handleClickAkcesoria}/> : <ExpandMore edge='end' onClick={handleClickAkcesoria}/>}
        </ListItemSecondaryAction>
      </ListItem>
      <Collapse in={openAkcesoria} timeout='0' unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button >
            {/* <ListItemText primary="Mleko" /> */}
            <Typography noWrap>Hahahhahahasasaasasas    </Typography>
          </ListItem>
          <ListItem button >
            <ListItemText primary="Taśma" />
          </ListItem>
          <ListItem button >
            <ListItemText primary="Blokady" />
          </ListItem>
        </List>
      </Collapse>


      {/* trzecia czesc */}
      <ListItem button >
            <ListItemText primary="Odzież" />
        
        <ListItemSecondaryAction>
        {openOdziez ? <ExpandLess edge='end' onClick={handleClickOdziez}/> : <ExpandMore edge='end' onClick={handleClickOdziez}/>}
        </ListItemSecondaryAction>
      </ListItem>
      <Collapse in={openOdziez} timeout='0' unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button >
            <ListItemText primary="Koszulki" />
          </ListItem>
          <ListItem button >
            <ListItemText primary="Spodenki" />
          </ListItem>
          <ListItem button >
            <ListItemText primary="Skarpety" />
          </ListItem>
        </List>
      </Collapse>

      {/* koniec */}
    </List>

        </>
    )
}

export default Filter