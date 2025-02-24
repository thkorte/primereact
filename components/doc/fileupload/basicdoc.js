import { useRef } from 'react';
import { FileUpload } from '../../lib/fileupload/FileUpload';
import { Toast } from '../../lib/toast/Toast';
import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function BasicDoc(props) {
    const toast = useRef(null);

    const onBasicUpload = () => {
        toast.current.show({ severity: 'info', summary: 'Success', detail: 'File Uploaded with Basic Mode' });
    };

    const code = {
        basic: `
<Toast ref={toast}></Toast>
<FileUpload mode="basic" name="demo[]" url="/api/upload" accept="image/*" maxFileSize={1000000} onUpload={onBasicUpload} />
        `,
        javascript: `
import React, { useRef } from 'react';
import { Toast } from 'primereact/toast';
import { FileUpload } from 'primereact/fileupload';

export default function BasicDoc() {
    const toast = useRef(null);

    const onBasicUpload = () => {
        toast.current.show({ severity: 'info', summary: 'Success', detail: 'File Uploaded with Basic Mode' });
    };
        
    return (
        <div className="card">
            <Toast ref={toast}></Toast>
            <FileUpload mode="basic" name="demo[]" url="https://primefaces.org/primereact/showcase/upload.php" accept="image/*" maxFileSize={1000000} onUpload={onBasicUpload} />
        </div>     
    )
}
        `,
        typescript: `
import React, { useRef } from 'react';
import { Toast } from 'primereact/toast';
import { FileUpload } from 'primereact/fileupload';

export default function BasicDoc() {
    const toast = useRef(null);

    const onBasicUpload = () => {
        toast.current.show({ severity: 'info', summary: 'Success', detail: 'File Uploaded with Basic Mode' });
    };

    return (
        <div className="card">
            <Toast ref={toast}></Toast>
            <FileUpload mode="basic" name="demo[]" url="https://primefaces.org/primereact/showcase/upload.php" accept="image/*" maxFileSize={1000000} onUpload={onBasicUpload} />
        </div>
    )
}
        `,
        php: `
/* public/upload.php */

<?php
header ("Access-Control-Allow-Origin: *");
echo '<p>Fake Upload Process</p>'; ?>
    `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>FileUpload basic mode provides a simpler UI as an alternative to advanced mode.</p>
            </DocSectionText>
            <div className="card">
                <Toast ref={toast}></Toast>
                <FileUpload mode="basic" name="demo[]" url={'/api/upload'} accept="image/*" maxFileSize={1000000} onUpload={onBasicUpload} />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
