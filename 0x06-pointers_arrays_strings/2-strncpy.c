#include "main.h"
/**
 * _strncpy - copy string from source to destination
 * @dest: destination
 * @src: source
 * @n: number of charcter
 * Return: dest
 */
char *_strncpy(char *dest, char *src, int n)
{
int i = 0;
int j = 0;
while (src[i] != '\0')
{
i++;
}
while ((dest[j] != '\0') && (j < n))
{
dest[j] = src[j];
j++;
}
for (j = i; j < n; j++)
dest[j] = '\0';
return (dest);
}
