/* eslint-disable @typescript-eslint/no-explicit-any, @typescript-eslint/no-empty-object-type */
import { z } from 'zod'
import { CacheControlScope, FilterCharacter, FilterEpisode, FilterLocation } from '@/generated/types'

type Properties<T> = Required<{
  [K in keyof T]: z.ZodType<T[K], any, T[K]>;
}>;

type definedNonNullAny = {};

export const isDefinedNonNullAny = (v: any): v is definedNonNullAny => v !== undefined && v !== null;

export const definedNonNullAnySchema = z.any().refine((v) => isDefinedNonNullAny(v));

export const CacheControlScopeSchema = z.nativeEnum(CacheControlScope);

export function FilterCharacterSchema(): z.ZodObject<Properties<FilterCharacter>> {
  return z.object({
    gender: z.string().nullish(),
    name: z.string().nullish(),
    species: z.string().nullish(),
    status: z.string().nullish(),
    type: z.string().nullish()
  })
}

export function FilterEpisodeSchema(): z.ZodObject<Properties<FilterEpisode>> {
  return z.object({
    episode: z.string().nullish(),
    name: z.string().nullish()
  })
}

export function FilterLocationSchema(): z.ZodObject<Properties<FilterLocation>> {
  return z.object({
    dimension: z.string().nullish(),
    name: z.string().nullish(),
    type: z.string().nullish()
  })
}
