import React, { useState, useEffect, useRef } from 'react';
import { TreeTable } from '../../../lib/treetable/TreeTable';
import { Column } from '../../../lib/column/Column';
import { NodeService } from '../../../../service/NodeService';
import { DocSectionCode } from '../../common/docsectioncode';
import { DocSectionText } from '../../common/docsectiontext';
import { Toast } from '../../../lib/toast/Toast';

export function EventsDoc(props) {
    const [nodes, setNodes] = useState([]);
    const [selectedNodeKey, setSelectedNodeKey] = useState([]);
    const toast = useRef(null);

    useEffect(() => {
        NodeService.getTreeTableNodes().then((data) => setNodes(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const onSelect = (event) => {
        toast.current.show({ severity: 'info', summary: 'Node Selected', detail: event.node.data.name });
    };

    const onUnselect = (event) => {
        toast.current.show({ severity: 'info', summary: 'Node Unselected', detail: event.node.data.name });
    };

    const code = {
        basic: `
<TreeTable value={nodes} selectionMode="single" selectionKeys={selectedNodeKey} onSelectionChange={e => setSelectedNodeKey(e.value)}
    onSelect={onSelect} onUnselect={onUnselect}>
    <Column field="name" header="Name" expander></Column>
    <Column field="size" header="Size"></Column>
    <Column field="type" header="Type"></Column>
</TreeTable>
        `,
        javascript: `
import React, { useState, useEffect, useRef } from 'react';
import { TreeTable } from 'primereact/treetable';
import { Column } from 'primereact/column';
import { Toast } from 'primereact/toast';
import { NodeService } from './service/NodeService';

export default function EventsDoc() {
const [nodes, setNodes] = useState([]);
const [selectedNodeKey, setSelectedNodeKey] = useState([]);
const toast = useRef(null);

useEffect(() => {
    NodeService.getTreeTableNodes().then(data => setNodes(data));
}, []); // eslint-disable-line react-hooks/exhaustive-deps

const onSelect = (event) => {
    toast.current.show({ severity: 'info', summary: 'Node Selected', detail: event.node.data.name });
}

const onUnselect = (event) => {
    toast.current.show({ severity: 'info', summary: 'Node Unselected', detail: event.node.data.name });
}

    return (
        <div className="card">
        <Toast ref={toast}></Toast>
            <TreeTable value={nodes} selectionMode="single" selectionKeys={selectedNodeKey} onSelectionChange={e => setSelectedNodeKey(e.value)}
                onSelect={onSelect} onUnselect={onUnselect}>
                <Column field="name" header="Name" expander></Column>
                <Column field="size" header="Size"></Column>
                <Column field="type" header="Type"></Column>
            </TreeTable>
        </div>
    )
}
        `,
        typescript: `
import React, { useState, useEffect, useRef } from 'react';
import { TreeTable } from 'primereact/treetable';
import { Column } from 'primereact/column';
import { Toast } from 'primereact/toast';
import { NodeService } from './service/NodeService';

export default function EventsDoc() {
const [nodes, setNodes] = useState([]);
const [selectedNodeKey, setSelectedNodeKey] = useState([]);
const toast = useRef(null);

useEffect(() => {
    NodeService.getTreeTableNodes().then(data => setNodes(data));
}, []); // eslint-disable-line react-hooks/exhaustive-deps

const onSelect = (event) => {
    toast.current.show({ severity: 'info', summary: 'Node Selected', detail: event.node.data.name });
}

const onUnselect = (event) => {
    toast.current.show({ severity: 'info', summary: 'Node Unselected', detail: event.node.data.name });
}

    return (
        <div className="card">
        <Toast ref={toast}></Toast>
            <TreeTable value={nodes} selectionMode="single" selectionKeys={selectedNodeKey} onSelectionChange={e => setSelectedNodeKey(e.value)}
                onSelect={onSelect} onUnselect={onUnselect}>
                <Column field="name" header="Name" expander></Column>
                <Column field="size" header="Size"></Column>
                <Column field="type" header="Type"></Column>
            </TreeTable>
        </div>
    )
}
        `,
        data: `
/* NodeService */
{
    key: '0',
    label: 'Documents',
    data: 'Documents Folder',
    icon: 'pi pi-fw pi-inbox',
    children: [
        {
            key: '0-0',
            label: 'Work',
            data: 'Work Folder',
            icon: 'pi pi-fw pi-cog',
            children: [
                { key: '0-0-0', label: 'Expenses.doc', icon: 'pi pi-fw pi-file', data: 'Expenses Document' },
                { key: '0-0-1', label: 'Resume.doc', icon: 'pi pi-fw pi-file', data: 'Resume Document' }
            ]
        },
        {
            key: '0-1',
            label: 'Home',
            data: 'Home Folder',
            icon: 'pi pi-fw pi-home',
            children: [{ key: '0-1-0', label: 'Invoices.txt', icon: 'pi pi-fw pi-file', data: 'Invoices for this month' }]
        }
    ]
},
...
`
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>TreeTable supports single, multiple and checkbox based selection modes.</p>
            </DocSectionText>
            <div className="card">
                <Toast ref={toast}></Toast>
                <TreeTable value={nodes} selectionMode="single" selectionKeys={selectedNodeKey} onSelectionChange={(e) => setSelectedNodeKey(e.value)} onSelect={onSelect} onUnselect={onUnselect}>
                    <Column field="name" header="Name" expander></Column>
                    <Column field="size" header="Size"></Column>
                    <Column field="type" header="Type"></Column>
                </TreeTable>
            </div>
            <DocSectionCode code={code} service={['NodeService']} />
        </>
    );
}
