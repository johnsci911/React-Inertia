import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../wayfinder'
/**
* @see \App\Http\Controllers\PuppyController::like
* @see app/Http/Controllers/PuppyController.php:66
* @route '/puppies/{puppy}/like'
*/
export const like = (args: { puppy: number | { id: number } } | [puppy: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: like.url(args, options),
    method: 'patch',
})

like.definition = {
    methods: ["patch"],
    url: '/puppies/{puppy}/like',
} satisfies RouteDefinition<["patch"]>

/**
* @see \App\Http\Controllers\PuppyController::like
* @see app/Http/Controllers/PuppyController.php:66
* @route '/puppies/{puppy}/like'
*/
like.url = (args: { puppy: number | { id: number } } | [puppy: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { puppy: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { puppy: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            puppy: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        puppy: typeof args.puppy === 'object'
        ? args.puppy.id
        : args.puppy,
    }

    return like.definition.url
            .replace('{puppy}', parsedArgs.puppy.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\PuppyController::like
* @see app/Http/Controllers/PuppyController.php:66
* @route '/puppies/{puppy}/like'
*/
like.patch = (args: { puppy: number | { id: number } } | [puppy: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: like.url(args, options),
    method: 'patch',
})

/**
* @see \App\Http\Controllers\PuppyController::like
* @see app/Http/Controllers/PuppyController.php:66
* @route '/puppies/{puppy}/like'
*/
const likeForm = (args: { puppy: number | { id: number } } | [puppy: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: like.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\PuppyController::like
* @see app/Http/Controllers/PuppyController.php:66
* @route '/puppies/{puppy}/like'
*/
likeForm.patch = (args: { puppy: number | { id: number } } | [puppy: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: like.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

like.form = likeForm

/**
* @see \App\Http\Controllers\PuppyController::store
* @see app/Http/Controllers/PuppyController.php:35
* @route '/puppies'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/puppies',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\PuppyController::store
* @see app/Http/Controllers/PuppyController.php:35
* @route '/puppies'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\PuppyController::store
* @see app/Http/Controllers/PuppyController.php:35
* @route '/puppies'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\PuppyController::store
* @see app/Http/Controllers/PuppyController.php:35
* @route '/puppies'
*/
const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\PuppyController::store
* @see app/Http/Controllers/PuppyController.php:35
* @route '/puppies'
*/
storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

store.form = storeForm

const puppies = {
    like: Object.assign(like, like),
    store: Object.assign(store, store),
}

export default puppies