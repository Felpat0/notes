import './../css/HomeNote.css';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import { useEffect, useState } from 'react';
import ClassicEditor from "@ckeditor/ckeditor5-build-classic"
import { CKEditor } from '@ckeditor/ckeditor5-react';

function ActiveNoteOrganizer(props) {
    useEffect(() => {
        let previousId;
        let currentId;
      // empty dependency array means this effect will only run once (like componentDidMount in classes)
      });

    return (
        <div className="card text-white bg-dark mb-3 sticky-top">
            <Container className="card-header">
                <Row>
                    <Col>
                        <div id="activeTitle" contentEditable="true" onInput={()=>{
                                //Check if the note has been changed
                                if(props.currentNoteId == props.active.key){
                                    let tempNote = props.active;
                                    tempNote.title = document.getElementById("activeTitle").innerHTML;
                                    props.editNote(-1, tempNote)
                                }
                            }}>
                                {props.active.title}
                        </div>
                    </Col>
                    <Col> 
                        <a onClick={props.edit} className="buttonRightPosition"><img className="buttonIcon" src="Images/Icons/edit.png"/></a>
                    </Col>
                </Row>
            </Container>
            
            <div style={{display: + 'inline-block'}}>
               
            </div>
            <div className="card-body">
                <div className="editor">
                    <CKEditor
                        id="ckeditor"
                        editor={ClassicEditor}
                        data={props.active.content}
                        onChange={(event, editor) => {
                            //Check if the note has been changed
                            if(props.currentNoteId == props.active.key){
                                const data = editor.getData()
                                let tempNote = props.active;
                                tempNote.content = data;
                                props.editNote(-1, tempNote)
                            }
                        }}
                        style={{height: + '25rem'}}
                    />
                </div>                
            </div>
        </div>
    );
}
export default ActiveNoteOrganizer;