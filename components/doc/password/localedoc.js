import Link from 'next/link';
import { useState } from 'react';
import { Password } from '../../lib/password/Password';
import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function LocaleDoc(props) {
    const [value, setValue] = useState(null);

    const code = {
        basic: `
<Password value={value} onChange={(e) => setValue(e.target.value)} />
        `,
        javascript: `
import React, { useState } from "react";
import { Password } from 'primereact/password';

export default function LocaleDemo() {
    const [value, setValue] = useState(null);

    return (
        <div className="card flex justify-content-center">
            <Password value={value} onChange={(e) => setValue(e.target.value)} />
        </div>
    )
}
        `,
        typescript: `
import React, { useState } from "react";
import { Password } from 'primereact/password';

export default function LocaleDemo() {
    const [value, setValue] = useState<string>(null);

    return (
        <div className="card flex justify-content-center">
            <Password value={value} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value)} />
        </div>
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    Labels are translated at component level by <i>promptLabel</i>, <i>weakLabel</i>, <i>mediumLabel</i> and <i>strongLabel</i> properties. In order to apply global translations for all Password components in the application, refer to
                    the <Link href="/locale">Locale API</Link>.
                </p>
            </DocSectionText>
            <div className="card flex justify-content-center">
                <Password value={value} onChange={(e) => setValue(e.target.value)} />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
