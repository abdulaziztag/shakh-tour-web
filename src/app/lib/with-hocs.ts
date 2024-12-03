import compose from "compose-function"

import { WithReactQuery } from "@/app/lib/with-react-query.tsx"

import { WithMantine } from "./with-mantine"
import { WithToastify } from "./with-toastify"

export const withHocs = compose(WithReactQuery, WithToastify, WithMantine)
