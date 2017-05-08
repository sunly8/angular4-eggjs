# angular4内置指令

## NgClass

```html
<div [ngClass]="{'text-primary': !list.active, 'text-success': list.active}">...</div>
```

## NgFor / NgForOf 替代 1.x ng-repeat

```html
<li *ngFor="let user of users; index as i; first as isFirst; even as isEven; odd as isOdd">
   {{i}}/{{users.length}}. {{user}} <span *ngIf="isFirst">default</span>
</li>
```

## NgIf

```html
<div *ngIf="show; then div1; else div2">...</div>
<ng-template #div1>Div1</ng-template>
<ng-template #div2>Div2</ng-template>
```

## NgPlural / NgPluralCase

```html
<ul [ngPlural]="value">
  <ng-template ngPluralCase="=0">0时 zero</ng-template>
  <ng-template ngPluralCase="=1">1时</ng-template>
  <ng-template ngPluralCase="few">其余的</ng-template>
</ul>
```

>- zero
>- one (singular)
>- two (dual)
>- few (paucal)
>- many (also used for fractions if they have a separate class)
>- other (required—general plural form—also used if the language only has a single form)


## NgStyle / style

```html
<p [ngStyle]="{'max-width.px': widthExp}">...</p>
<p [style].color="colorExp">
```

## NgSwitch / NgSwitchCase / NgSwitchDefault

```html
<ul [ngSwitch]='user.gender'>
  <li *ngSwitchCase="'male'">男</li>
  <li *ngSwitchCase="'Female'">女</li>
  <li *ngSwitchDefault>其他</li>
</ul>
```

## NgTemplateOutlet

```html
<ng-container *ngTemplateOutlet="greet"></ng-container>
<ng-container *ngTemplateOutlet="eng; context: myContext"></ng-container>

<ng-template #greet><span>Hello</span></ng-template>
<ng-template #eng let-name><span>Hello {{name}}!</span></ng-template>
<ng-template #svk let-person="localSk"><span>Ahoj {{person}}!</span></ng-template>
```

```ts
myContext = {$implicit: 'World', localSk: 'Svet'};
```
