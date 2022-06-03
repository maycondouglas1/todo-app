import React from 'react';
import IconButton from '../template/iconButton';

const TodoForm = (props) => {

    const keyHandler = (e) => {
        if (e.key === 'Enter') {
            e.shiftKey ? props.handleSearch() : props.handleAdd();
        }
        else if (e.key === 'Escape') {
            props.handleClear();
        }
    }

    return (
        <div role='form' className='todoForm'>
            <div className='col-xs-12 col-sm-9 col-md-10'>
                <input
                    type="text"
                    id='description'
                    className='form-control'
                    onKeyUp={keyHandler}
                    placeholder='Adicione uma tarefa'
                    value={props.description}
                    onChange={props.handleChange} />
            </div>

            <div className='col-xs-12 col-sm-3 col-md-2' >
                <IconButton style='primary' icon='plus' onClick={props.handleAdd} />
                <IconButton style='info' icon='search' onClick={props.handleSearch} />
                <IconButton style='default' icon='close' onClick={props.handleClear} />
            </div>
        </div>
    );
};

export default TodoForm;