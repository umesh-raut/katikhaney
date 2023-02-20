import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import '../App.css';

export default function Footer() {
    const [value, setValue] = React.useState(0);

    return (
        <Box sx={{ width: 500 }} className="style">
            <BottomNavigation
                showLabels
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
            >
                <BottomNavigationAction label="Meal timer" icon={<RestoreIcon />} />
                <BottomNavigationAction label="Favorite Diet Plans" icon={<FavoriteIcon />} />
                <BottomNavigationAction label="Contact Us" icon={<LocationOnIcon />} />
            </BottomNavigation>
        </Box>
    );
}

