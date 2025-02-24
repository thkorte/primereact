import Head from 'next/head';
import { DocSectionNav } from '../../components/doc/common/docsectionnav';
import { DocSections } from '../../components/doc/common/docsections';
import { AccessibilityDoc } from '../../components/doc/knob/accessibilitydoc';
import { BasicDoc } from '../../components/doc/knob/basicdoc';
import { ColorDoc } from '../../components/doc/knob/colordoc';
import { DisabledDoc } from '../../components/doc/knob/disableddoc';
import { FormikDoc } from '../../components/doc/knob/form/formikdoc';
import { HookFormDoc } from '../../components/doc/knob/form/hookformdoc';
import { ImportDoc } from '../../components/doc/knob/importdoc';
import { MinMaxDoc } from '../../components/doc/knob/minmaxdoc';
import { ReactiveDoc } from '../../components/doc/knob/reactivedoc';
import { ReadOnlyDoc } from '../../components/doc/knob/readonlydoc';
import { SizeDoc } from '../../components/doc/knob/sizedoc';
import { StepDoc } from '../../components/doc/knob/stepdoc';
import { StrokeDoc } from '../../components/doc/knob/strokedoc';
import { StyleDoc } from '../../components/doc/knob/styledoc';
import { TemplateDoc } from '../../components/doc/knob/templatedoc';

const KnobDemo = () => {
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
            id: 'minmax',
            label: 'Min/Max',
            component: MinMaxDoc
        },
        {
            id: 'step',
            label: 'Step',
            component: StepDoc
        },
        {
            id: 'template',
            label: 'Template',
            component: TemplateDoc
        },
        {
            id: 'stroke',
            label: 'Stroke',
            component: StrokeDoc
        },
        {
            id: 'size',
            label: 'Size',
            component: SizeDoc
        },
        {
            id: 'color',
            label: 'Color',
            component: ColorDoc
        },
        {
            id: 'reactivec',
            label: 'Reactive',
            component: ReactiveDoc
        },
        {
            id: 'readonly',
            label: 'ReadOnly',
            component: ReadOnlyDoc
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
            doc: [{ name: 'Knob', pathname: '/modules/knob.html' }]
        }
    ];

    return (
        <div>
            <Head>
                <title>React Knob Component</title>
                <meta name="description" content="Knob is a form component to define number inputs with a dial." />
            </Head>
            <div className="doc">
                <div className="doc-main">
                    <div className="doc-intro">
                        <h1>Knob</h1>
                        <p>Knob is a form component to define number inputs with a dial.</p>
                    </div>
                    <DocSections docs={docs} />
                </div>
                <DocSectionNav docs={docs} />
            </div>
        </div>
    );
};

export default KnobDemo;
