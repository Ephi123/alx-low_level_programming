#include "main.h"
/**
 * _strcat - function used to concatination string
 * @dest: destination
 * @src: source
 * Return: destination
 */
char *_strcat(char *dest, char *src)
{
int i = 1;
int j = 0;
while (dest[i] != '\0')
i++;
while (src[j] != '\0')
{
dest[i] = src[j];
i++;
j++;
}
return (dest);
}
