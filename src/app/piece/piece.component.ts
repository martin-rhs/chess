import { Component } from '@angular/core';

interface PieceCode {
  __html: string;
}

interface PieceCodes {
  [key: string]: {
    [key: string]: PieceCode;
  };
}

type Color = 'w' | 'b';
type Piece = 'k' | 'q' | 'r' | 'b' | 'n' | 'p';

@Component({
  selector: 'app-piece',
  templateUrl: './piece.component.html',
  styleUrls: ['./piece.component.css']
})
export class PieceComponent {
  pieces_codes: PieceCodes = {
    w: {
        k: { __html: '♔' },
        q: { __html: '♕' },
        r: { __html: '♖' },
        b: { __html: '♗' },
        n: { __html: '♘' },
        p: { __html: '♙' },
    },
    b: {
        k: { __html: '♚' },
        q: { __html: '♛' },
        r: { __html: '♜' },
        b: { __html: '♝' },
        n: { __html: '♞' },
        p: { __html: '♟' },
    },
  };

  colors: Color[] = ['w', 'b'];
  pieces: Piece[] = ['k', 'q', 'r', 'b', 'n', 'p'];

  getPieceCode(color: Color, piece: Piece): string {
    return this.pieces_codes[color][piece].__html;
  }
}

