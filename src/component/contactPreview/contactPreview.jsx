import React, {useState, useEffect} from 'react'
import { useLocation } from 'react-router-dom';
import './contactPreview.css'
import PreviewRow from '../previewRow/previewRow'
import axios from 'axios'

function ContactPreview() {
    const [contactPreview, setContactPreview]  = useState('')
    const id = useLocation().pathname
    console.log(id)
    useEffect(() => {
      const fetchContactPreview = async () => {
        try {
            const res = axios.get('http://localhost:8800/api/get/one/:id')
            setContactPreview(res.data)
        } catch (error) {
            console.log(error)
        }
      }
      fetchContactPreview()
    },[])
    return (
        <div className='contactPreview'>
            <div className='contactPreviewTop'>
                <span>Contact Preview</span>
                <span>Submit Date: 27/02/23</span>
            </div>
            <div className='contactPreviewBody'>
                <PreviewRow />
            </div>
        </div>
    )
}

export default ContactPreview