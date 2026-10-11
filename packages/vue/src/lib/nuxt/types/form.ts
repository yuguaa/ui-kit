import type { ComputedRef, DeepReadonly, Ref } from 'vue'
import type { GetObjectField } from './utils'

/** @standard-schema/spec 未随包安装，本地结构类型替代（仅类型层） */
export interface StandardSchemaV1<I = unknown, O = I> {
  readonly '~standard': {
    readonly version: 1
    readonly vendor: string
    readonly validate: (value: unknown) => StandardSchemaV1.Result<O> | Promise<StandardSchemaV1.Result<O>>
  }
}

export namespace StandardSchemaV1 {
  export type Result<Output> = { issues?: Issue[]; value: Output } | { issues: Issue[] }

  export interface Issue {
    readonly message: string
    readonly path?: ReadonlyArray<PropertyKey | { readonly key: PropertyKey }>
  }

  export type InferInput<S> = S extends StandardSchemaV1<infer I, any> ? I : never
  export type InferOutput<S> = S extends StandardSchemaV1<any, infer O> ? O : never
}

/** superstruct 未随包安装，本地结构类型替代（仅类型层） */
export interface Struct<S = any, T = any> {
  schema: S
  coercer: (value: unknown) => T
  validator: (value: unknown, context: unknown) => unknown
  refiner: (value: unknown, context: unknown) => unknown
  validate: (value: unknown) => [error: { failures: () => Array<{ message: string; path: Array<string | number> }> } | undefined, result?: T]
}

export interface Form<S extends FormSchema> {
  validate<T extends boolean>(opts?: { name?: keyof FormData<S, false> | (keyof FormData<S, false>)[], silent?: boolean, nested?: boolean, transform?: T }): Promise<FormData<S, T> | false>
  clear (path?: keyof FormData<S, false> | string | RegExp): void
  errors: Ref<FormErrorWithId[]>
  setErrors (errs: FormError[], name?: keyof FormData<S, false> | string | RegExp): void
  getErrors (name?: keyof FormData<S, false> | string | RegExp): FormErrorWithId[]
  submit (): Promise<void>
  disabled: ComputedRef<boolean>
  dirty: ComputedRef<boolean>
  loading: Ref<boolean>

  dirtyFields: ReadonlySet<DeepReadonly<keyof FormData<S, false>>>
  touchedFields: ReadonlySet<DeepReadonly<keyof FormData<S, false>>>
  blurredFields: ReadonlySet<DeepReadonly<keyof FormData<S, false>>>
}

export type FormSchema<I extends object = object, O extends object = I>
  = | Struct<any, any>
    | StandardSchemaV1<I, O>

// Define a utility type to infer the input type based on the schema type
export type InferInput<Schema> = Schema extends StandardSchemaV1 ? StandardSchemaV1.InferInput<Schema>
  : Schema extends Struct<infer I, any> ? I
    : never

// Define a utility type to infer the output type based on the schema type
export type InferOutput<Schema> = Schema extends StandardSchemaV1 ? StandardSchemaV1.InferOutput<Schema>
  : Schema extends Struct<infer O, any> ? O
    : never

export type FormData<S extends FormSchema, T extends boolean = true> = T extends true ? InferOutput<S> : InferInput<S>

export type FormInputEvents = 'input' | 'blur' | 'change' | 'focus'

export interface FormError<P extends string = string> {
  name?: P
  message: string
}

export interface FormErrorWithId extends FormError {
  id?: string
}

export type FormSubmitEvent<T> = SubmitEvent & { data: T }

export type FormValidationError = {
  errors: FormErrorWithId[]
  children?: FormErrorWithId[]
}

export type FormErrorEvent = SubmitEvent & FormValidationError

export type FormEventType = FormInputEvents

export type FormChildAttachEvent<S extends FormSchema> = {
  type: 'attach'
  formId: string | number
  validate: Form<any>['validate']
  clearDirty: () => void
  name?: string
  api: Form<S>
}

export type FormChildDetachEvent = {
  type: 'detach'
  formId: string | number
}

export type FormInputEvent<T extends object> = {
  type: FormEventType
  name: keyof T
  eager?: boolean
}

export type FormEvent<T extends object>
  = | FormInputEvent<T>
    | FormChildAttachEvent<any>
    | FormChildDetachEvent

export interface FormInjectedOptions {
  disabled?: boolean
  validateOnInputDelay?: number
}

export interface FormFieldInjectedOptions<T> {
  name?: string
  size?: GetObjectField<T, 'size'>
  error?: string | boolean
  eagerValidation?: boolean
  validateOnInputDelay?: number
  errorPattern?: RegExp
  hint?: string
  description?: string
  help?: string
  ariaId: string
}

export interface ValidateReturnSchema<T> {
  result: T
  errors: FormError[] | null
}

export class FormValidationException extends Error {
  formId: string | number
  errors: FormErrorWithId[]

  constructor(formId: string | number, errors: FormErrorWithId[]) {
    super('Form validation exception')
    this.formId = formId
    this.errors = errors
    Object.setPrototypeOf(this, FormValidationException.prototype)
  }
}
