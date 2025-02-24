import Head from 'next/head';
import React from 'react';
import { AccessibilityDoc } from '../../components/doc/checkbox/accessibilitydoc';
import { BasicDoc } from '../../components/doc/checkbox/basicdoc';
import { DisabledDoc } from '../../components/doc/checkbox/disableddoc';
import { DynamicDoc } from '../../components/doc/checkbox/dynamicdoc';
import { FormikDoc } from '../../components/doc/checkbox/form/formikdoc';
import { HookFormDoc } from '../../components/doc/checkbox/form/hookformdoc';
import { GroupDoc } from '../../components/doc/checkbox/groupdoc';
import { ImportDoc } from '../../components/doc/checkbox/importdoc';
import { InvalidDoc } from '../../components/doc/checkbox/invaliddoc';
import { StyleDoc } from '../../components/doc/checkbox/styledoc';
import { DocSectionNav } from '../../components/doc/common/docsectionnav';
import { DocSections } from '../../components/doc/common/docsections';

const CheckboxDemo = () => {
    const docs = [
        {
            id: 'import',
            label: 'Import',
            component: ImportDoc
        },
        {
            id: 'basic',
            label: 'Basic',
            component: BasicDoc
        },
        {
            id: 'group',
            label: 'Group',
            component: GroupDoc
        },
        {
            id: 'dynamic',
            label: 'Dynamic',
            component: DynamicDoc
        },
        {
            id: 'invalid',
            label: 'Invalid',
            component: InvalidDoc
        },
        {
            id: 'disabled',
            label: 'Disabled',
            component: DisabledDoc
        },
        {
            id: 'form',
            label: 'Form',
            description: 'Compatibility with popular React form libraries.',
            children: [
                {
                    id: 'formik',
                    label: 'Formik',
                    component: FormikDoc
                },
                {
                    id: 'hookform',
                    label: 'Hook Form',
                    component: HookFormDoc
                }
            ]
        },
        {
            id: 'style',
            label: 'Style',
            component: StyleDoc
        },
        {
            id: 'accessibility',
            label: 'Accessibility',
            component: AccessibilityDoc
        },
        {
            id: 'api',
            label: 'API',
            doc: [{ name: 'Checkbox', pathname: '/modules/checkbox.html' }]
        }
    ];

    return (
        <div>
            <Head>
                <title>React Checkbox Component</title>
                <meta name="description" content="Checkbox is an extension to standard checkbox element with theming." />
            </Head>
            <div className="doc">
                <div className="doc-main">
                    <div className="doc-intro">
                        <h1>Checkbox</h1>
                        <p>Checkbox is an extension to standard checkbox element with theming.</p>
                    </div>
                    <DocSections docs={docs} />
                </div>
                <DocSectionNav docs={docs} />
            </div>
        </div>
    );
};

export default CheckboxDemo;
