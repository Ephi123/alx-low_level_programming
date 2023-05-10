#include "search_algos.h"

/**
 * linear_search - searches for a value in an array of integers
 * @array: array of integers
 * @size: size of array
 * @value: value that should be found
 *
 * Return: index of value searched or -1 if it doesn't exist
 */
int linear_search(int *array, size_t size, int value)
{
	size_t i;

	if (array == NULL)
		return (-1);

	for (i = 0; i < (int)size; i++)
	{
		printf("Value checked array[%u] = [%d]\n", i, array[i]);
		if (value == array[i])
			return (i);
	}

	return (-1);
}
