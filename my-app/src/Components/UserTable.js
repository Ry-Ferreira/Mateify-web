import React from "react";
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import IconButton from '@material-ui/core/IconButton';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';

const UserTable = ({users}) => {
    
    return (
        <TableContainer>
            <Table aria-label="simple table">
                <TableHead>
                    <Typography variant="h6">Usuarios</Typography>
                    <TableRow>
                        <TableCell><Typography variant="body1"> Nombre </Typography></TableCell>
                        <TableCell><Typography variant="body1"> Apellido </Typography></TableCell>
                        <TableCell><Typography variant="body1"> Contacto </Typography></TableCell>
                        <TableCell><Typography variant="body1"> Edad </Typography></TableCell>
                        <TableCell><Typography variant="body1"> Lista </Typography></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <Divider variant="middle" />
                    {users.map((u) => (
                        <TableRow>
                            <TableCell align="left">{u.name}</TableCell>
                            <TableCell align="left">{u.lastName}</TableCell>
                            <TableCell align="left">{u.email}</TableCell>
                            <TableCell align="left">{u.age}</TableCell>
                            <TableCell align="left">
                                <Box>
                                    <IconButton>
                                        <ThumbUpAltIcon />
                                    </IconButton>
                                </Box>
                            </TableCell>
                        </TableRow>

                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default UserTable;