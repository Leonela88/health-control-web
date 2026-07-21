'use client'
import { useFormState, useFormStatus } from 'react-dom'
import { contactAction, ContactActionState } from '@/lib/actions/contact'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { useRef, useState } from 'react'
import LegalNoticeModal from './LegalNoticeModal'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select'

const TIPOS_DOLOR = [
    'Dolor de espalda',
    'Rodillas y caderas',
    'Piernas, pies y tobillos',
    'Ciática',
    'Hombros y codos',
    'Dolor de cuello, cabeza y migraña',
    'Otro',
]

const initialState: ContactActionState = {
    success: false,
    message: '',
}

interface SubmitButtonProps {
    legalAccepted: boolean
}

function SubmitButton({ legalAccepted }: SubmitButtonProps) {
    const { pending } = useFormStatus()
    return (
        <Button type="submit" disabled={pending || !legalAccepted} className="w-full">
            {pending ? 'Enviando...' : 'Enviar mensaje'}
        </Button>
    )
}

export default function ContactForm() {
    const [state, formAction] = useFormState(contactAction, initialState)
    const formRef = useRef<HTMLFormElement>(null)
    const [legalAccepted, setLegalAccepted] = useState(false)
    const [showLegalModal, setShowLegalModal] = useState(false)
    const [hasReadLegal, setHasReadLegal] = useState(false) // Track if user has read through modal

    const handleLegalAccept = () => {
        setHasReadLegal(true)
        setLegalAccepted(true)
    }

    const handleLegalLinkClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        setShowLegalModal(true)
    }

    const handleCheckboxChange = (checked: boolean) => {
        // Only allow checking if user has read the legal notice through the modal
        if (hasReadLegal) {
            setLegalAccepted(checked as boolean)
        } else {
            // If user tries to check without reading, open the modal
            setShowLegalModal(true)
        }
    }

    return (
        <form key={state.success ? 'submitted' : 'idle'}
            ref={formRef} action={formAction} className="space-y-5">
            {/* Nombre */}
            <div>
                <label htmlFor="nombre" className="mb-1 block text-sm font-medium">
                    Nombre <span className="text-destructive">*</span>
                </label>
                <Input id="nombre" name="nombre" placeholder="Tu nombre" />
                {state.errors?.nombre && (
                    <p className="mt-1 text-sm text-destructive">{state.errors.nombre[0]}</p>
                )}
            </div>

            {/* Email */}
            <div>
                <label htmlFor="email" className="mb-1 block text-sm font-medium">
                    Email <span className="text-destructive">*</span>
                </label>
                <Input id="email" name="email" type="email" placeholder="tu@email.com" />
                {state.errors?.email && (
                    <p className="mt-1 text-sm text-destructive">{state.errors.email[0]}</p>
                )}
            </div>

            {/* Teléfono */}
            <div>
                <label htmlFor="telefono" className="mb-1 block text-sm font-medium">
                    Teléfono <span className="text-muted-foreground text-xs">(opcional)</span>
                </label>
                <Input id="telefono" name="telefono" type="tel" placeholder="+34 600 000 000" />
            </div>

            {/* Tipo de dolor */}
            <div>
                <label htmlFor="tipoDolor" className="mb-1 block text-sm font-medium">
                    Motivo de consulta <span className="text-destructive">*</span>
                </label>
                <Select name="tipoDolor">
                    <SelectTrigger id="tipoDolor">
                        <SelectValue placeholder="Selecciona un motivo" />
                    </SelectTrigger>
                    <SelectContent>
                        {TIPOS_DOLOR.map((tipo) => (
                            <SelectItem key={tipo} value={tipo}>
                                {tipo}
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>
                {state.errors?.tipoDolor && (
                    <p className="mt-1 text-sm text-destructive">{state.errors.tipoDolor[0]}</p>
                )}
            </div>

            {/* Mensaje */}
            <div>
                <label htmlFor="mensaje" className="mb-1 block text-sm font-medium">
                    Mensaje <span className="text-destructive">*</span>
                </label>
                <Textarea
                    id="mensaje"
                    name="mensaje"
                    placeholder="Cuéntanos cómo podemos ayudarte..."
                    rows={5}
                />
                {state.errors?.mensaje && (
                    <p className="mt-1 text-sm text-destructive">{state.errors.mensaje[0]}</p>
                )}
            </div>

            {/* Legal acceptance checkbox */}
            <div className="flex items-start gap-3 p-4 rounded-lg border border-[#d4a745]/30 bg-[#f7f3ec]/50 dark:bg-[#1c3557]/30">
                <Checkbox
                    id="legal-acceptance"
                    checked={legalAccepted}
                    onCheckedChange={handleCheckboxChange}
                    className="mt-0.5"
                />
                <label
                    htmlFor="legal-acceptance"
                    className="text-sm leading-relaxed cursor-pointer"
                >
                    He leído y acepto el{' '}
                    <button
                        type="button"
                        onClick={handleLegalLinkClick}
                        className="text-[#d4a745] hover:text-[#c19639] underline font-medium"
                    >
                        Aviso Legal
                    </button>
                    <span className="text-destructive ml-1">*</span>
                </label>
            </div>
            
            {!hasReadLegal && (
                <p className="text-xs text-[#1c3557]/60 dark:text-[#f7f3ec]/60 -mt-2">
                    Debes leer el Aviso Legal completo antes de poder enviar el formulario.
                </p>
            )}

            {/* Mensaje global */}
            {state.message && (
                <p className={`text-sm font-medium ${state.success ? 'text-green-600' : 'text-destructive'}`}>
                    {state.message}
                </p>
            )}

            <SubmitButton legalAccepted={legalAccepted} />

            {/* Legal Notice Modal */}
            <LegalNoticeModal
                open={showLegalModal}
                onOpenChange={setShowLegalModal}
                onAccept={handleLegalAccept}
            />
        </form>
    )
}