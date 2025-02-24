import { useState } from 'react';
import { Chips } from '../../lib/chips/Chips';
import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function FloatLabelDoc(props) {
    const [value, setValue] = useState([]);

    const code = {
        basic: `
<span className="p-float-label">
    <Chips id="chips" value={value} onChange={(e) => setValue(e.value)} />
    <label htmlFor="chips">Username</label>
</span>
        `,
        javascript: `
import React, { useState } from "react";
import { Chips } from "primereact/chips";

export default function FloatLabelDemo() {
    const [value, setValue] = useState([]);

    return (
        <div className="card p-fluid">
            <span className="p-float-label">
                <Chips id="chips" value={value} onChange={(e) => setValue(e.value)} />
                <label htmlFor="chips">Username</label>
            </span>
        </div>
    )
}
        `,
        typescript: `
import React, { useState } from "react";
import { Chips, ChipsChangeParams } from "primereact/chips";

export default function FloatLabelDemo() {
    const [value, setValue] = useState<string[]>([]);

    return (
        <div className="card p-fluid">
            <span className="p-float-label">
                <Chips id="chips" value={value} onChange={(e: ChipsChangeParams) => setValue(e.value)} />
                <label htmlFor="chips">Username</label>
            </span>
        </div>
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    A floating label is implemented by wrapping the input and the label inside a container having <i>.p-float-label</i> style class.
                </p>
            </DocSectionText>
            <div className="card p-fluid">
                <span className="p-float-label">
                    <Chips id="chips" value={value} onChange={(e) => setValue(e.value)} />
                    <label htmlFor="chips">Username</label>
                </span>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
