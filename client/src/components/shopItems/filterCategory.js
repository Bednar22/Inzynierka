import React, {useState} from 'react'
import {List, ListItem, ListItemText, Collapse, ListItemSecondaryAction} from '@material-ui/core'
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';

const FilterCategory = (props) => {

    const [collapse, setCollapse] = useState(false)

    return(
        <>
            <ListItem button >
              <ListItemText primary={props.categoryName} />
        
              <ListItemSecondaryAction>
              {collapse ? <ExpandLess edge='end' onClick={()=>setCollapse(prevCollapse=>!prevCollapse)}/> 
              : <ExpandMore edge='end' onClick={()=>setCollapse(prevCollapse=>!prevCollapse)}/>}
              </ListItemSecondaryAction>
            </ListItem>
            <Collapse in={collapse} timeout={0} unmountOnExit>
              <List component="div" disablePadding>  {/* ITEMY CO POZNIEJ MAJA BYC MAPOWANE */}  
                {props.subCategories.map((item,index)=>{
                    return(<ListItem button key={index} >
                        <ListItemText primary={item} />
                    </ListItem>)
                })
                } 
              </List>
           </Collapse>
           </>
    )
}

export default FilterCategory;