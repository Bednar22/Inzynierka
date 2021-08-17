import React, { useState } from 'react';
import { List, ListItem, ListItemText, Collapse, ListItemSecondaryAction } from '@material-ui/core';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import axios from 'axios';
import { useHistory } from 'react-router';
const FilterCategory = (props) => {
    const [collapse, setCollapse] = useState(false);
    const history = useHistory();
    const categoryClickHandler = (category) => {
        history.push(`/shop/${category}`);
    };
    const subcategoryClickHandler = (category, subcategory) => {
        history.push(`/shop/${category}/${subcategory}`);
    };
    return (
        <>
            <ListItem button onClick={() => categoryClickHandler(props.categoryName)}>
                <ListItemText primary={props.categoryName} />

                <ListItemSecondaryAction>
                    {collapse ? (
                        <ExpandLess edge='end' onClick={() => setCollapse((prevCollapse) => !prevCollapse)} />
                    ) : (
                        <ExpandMore edge='end' onClick={() => setCollapse((prevCollapse) => !prevCollapse)} />
                    )}
                </ListItemSecondaryAction>
            </ListItem>
            <Collapse in={collapse} timeout={0} unmountOnExit>
                <List component='div' disablePadding>
                    {' '}
                    {/* ITEMY CO POZNIEJ MAJA BYC MAPOWANE */}
                    {props.subCategories.map((item, index) => {
                        return (
                            <ListItem
                                onClick={() => subcategoryClickHandler(props.categoryName, item)}
                                button
                                key={index}
                            >
                                <ListItemText primary={item} />
                            </ListItem>
                        );
                    })}
                </List>
            </Collapse>
        </>
    );
};

export default FilterCategory;
