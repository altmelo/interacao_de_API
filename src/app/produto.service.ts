import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  private url = "http://localhost:3000/produtos";

  constructor(private _httpClient: HttpClient) { }

  getProduto(id: any): Observable<Produto> {
    const urlidProduto = `${this.url}?id=${id}`;
    return this._httpClient.get<Produto>(urlidProduto);
  }

getProdutos():Observable<Produtos[]>
{return this._httpClient.get<Produto[]>(this.url);

}
cadastrarProduto(produto):Observable<Produto[]>{
  return this._httpClient.post<Produto[]>(this.url, produto);
}

atualizaProduto(id:any, produto: Produto):Observable<Produto[]>{
  const urlAtualizar = `${this.url}?${id}`;
  return this._httpClient.put<Produto[]>(urlAtualizar, produto);

}
}
