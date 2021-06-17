import React, {useState, useEffect} from 'react'
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
import axios from 'axios'
import Button from '@material-ui/core/Button'

const Filter = () => {

  

    const [openCzesci, setOpenCzesci] = useState(false);
     const [openAkcesoria, setOpenAkcesoria] = useState(false)
     const [openOdziez, setOpenOdziez] = useState(false)
    const [categories, setCategories] = useState([])
    const [opens, setOpens] = useState([])
   

    const getCategories = async () => {
      
      try {
           await axios.get('/categories').then(res=>{
              setCategories(res.data)
        })
      } catch (error) {
        console.error(error)
      } 
    }

    const createOpenObject = () => {
      console.log("KATEGORIE:")
      console.log(categories)
      
      if(categories.length==0) return;
       
        categories.forEach((item) => {
          console.log(item.mainCategory)
          const newObject = {
            [item.mainCategory]:false
          }
          console.log(newObject)
          setOpens(prevOpens=>[...prevOpens, newObject])
        })
      console.log(opens)
    }

    useEffect(()=>{
      createOpenObject();
    },[categories])

    useEffect(()=>{
        getCategories();
    },[])

    const firstFilter = () => {

      const subArrayList = categories.map((item)=>{
        return(
          
          <ListItem button >
            <ListItemText primary={item} />
          </ListItem>
        )
      })

      return(
        
        <List >
            <ListItem button >
              <ListItemText primary="Części" />
        
              <ListItemSecondaryAction>
              {openCzesci ? <ExpandLess edge='end' onClick={()=>setOpenCzesci(prevOpenCzesci=>!prevOpenCzesci)}/> 
              : <ExpandMore edge='end' onClick={()=>setOpenCzesci(prevOpenCzesci=>!prevOpenCzesci)}/>}
              </ListItemSecondaryAction>
            </ListItem>
            <Collapse in={openCzesci} timeout='0' unmountOnExit>
              <List component="div" disablePadding>   
                {subArrayList}
              </List>
           </Collapse>
        </List>
      )
    }

    return (
        <>
        <Button onClick = {()=>createOpenObject()}>
            TUTAJ
            </Button>
           <List style={{maxWidth:200}}>
            <ListItem button >
            <ListItemText primary="Części" />
        
        <ListItemSecondaryAction>
        {openCzesci ? <ExpandLess edge='end' onClick={()=>setOpenCzesci(prevOpenCzesci=>!prevOpenCzesci)}/> 
        : <ExpandMore edge='end' onClick={()=>setOpenCzesci(prevOpenCzesci=>!prevOpenCzesci)}/>}
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
        {openAkcesoria ? <ExpandLess edge='end' onClick={()=>setOpenAkcesoria(prevOpenAkcesoria=>!prevOpenAkcesoria)}/> 
        : <ExpandMore edge='end' onClick={()=>setOpenAkcesoria(prevOpenAkcesoria=>!prevOpenAkcesoria)}/>}
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
        {openOdziez ? <ExpandLess edge='end' onClick={()=>setOpenOdziez(prevOpenOdziez=>!prevOpenOdziez)}/> 
        : <ExpandMore edge='end' onClick={()=>setOpenOdziez(prevOpenOdziez=>!prevOpenOdziez)}/>}
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

      {opens.map((item)=>{
        return(item[0])
      })}
        </>
    )
}

export default Filter